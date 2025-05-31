/**
 * @typedef {T extends Parser<infer V> ? V : never} TypeOf
 * @template T
 */

/**
 * @typedef {import('./lib/types.js').ParseError} ParseError
 */

/**
 * @typedef {import('./lib/types.js').ParseResult<V>} ParseResult
 * @template V
 */

/**
 * @typedef {import('./lib/types.js').Parser<V>} Parser
 * @template V
 */

/** @type {{ type: 'ERROR'; errors: Array<ParseError> }} */
const NOT_AN_OBJECT_ERROR = {
  type: 'ERROR',
  errors: [{ keyPath: [], message: 'is not an object' }],
}

/** @type {() => Parser<string>} */
export const string = primitiveParser('string')
/** @type {() => Parser<number>} */
export const number = primitiveParser('number')
/** @type {() => Parser<boolean>} */
export const boolean = primitiveParser('boolean')
/** @type {() => Parser<undefined>} */
export const undefined = primitiveParser('undefined')

/**
 * @type {import('./lib/types.js').literal}
 */
export const literal = (l) => {
  return (v) =>
    l === v
      ? { type: 'VALUE', value: /** @type {any} */ (v) }
      : {
          type: 'ERROR',
          errors: [
            { keyPath: [], message: `does not equal ${JSON.stringify(l)}` },
          ],
        }
}

/**
 * @param {V} record
 * @template {{ [key in keyof V]: Parser<unknown> }} V
 * @returns {Parser<{[key in keyof V]: V[key] extends Parser<infer T> ? T : never}>}
 */
export function type(record) {
  return (v) => {
    if (typeof v !== 'object' || v === null) return NOT_AN_OBJECT_ERROR

    let isValid = true
    /** @type {ParseError[]} */
    const errors = []
    for (const [key, value] of Object.entries(record)) {
      const r = /** @type {Parser<unknown>} */ (value)(Reflect.get(v, key))
      if (r.type === 'ERROR') {
        isValid = false
        errors.push(
          ...r.errors.map((e) => ({ ...e, keyPath: [key, ...e.keyPath] })),
        )
      }
    }

    return isValid
      ? { type: 'VALUE', value: /** @type {any} */ (v) }
      : { type: 'ERROR', errors }
  }
}

/**
 * @param {V} operands
 * @returns {Parser<T>}
 * @template {Array<Parser<unknown>>} V
 * @template {V[number] extends Parser<infer T> ? T : never} T
 */
export function or(operands) {
  return (v) => {
    /** @type {ParseError[]} */
    const errors = []
    for (const operand of operands) {
      const r = operand(v)
      if (r.type === 'VALUE')
        return { type: 'VALUE', value: /** @type {T} */ (r.value) }
      errors.push(...r.errors)
    }
    return { type: 'ERROR', errors }
  }
}

/**
 * @param {V} t
 * @returns {Parser<T>}
 * @template {Parser<unknown>} V
 * @template {V extends Parser<infer T> ? T[] : never} T
 */
export function array(t) {
  return (v) => {
    if (!Array.isArray(v)) {
      return {
        type: 'ERROR',
        errors: [{ keyPath: [], message: 'is not an array' }],
      }
    }

    let isValid = true
    /** @type {ParseError[]} */
    const errors = []
    for (const [i, entry] of Object.entries(v)) {
      const r = t(entry)
      if (r.type === 'ERROR') {
        errors.push(
          ...r.errors.map((e) => ({ ...e, keyPath: [i, ...e.keyPath] })),
        )
        isValid = false
      }
    }

    return isValid
      ? { type: 'VALUE', value: /** @type {any} */ (v) }
      : { type: 'ERROR', errors }
  }
}

/**
 * @param {TP} tp
 * @returns {Parser<TP extends Parser<infer T> ? Record<string, T> : never>}
 * @template {Parser<unknown>} TP
 */
export function record(tp) {
  return (v) => {
    if (typeof v !== 'object' || v === null) return NOT_AN_OBJECT_ERROR

    let isValid = true
    /** @type {ParseError[]} */
    const errors = []
    for (const [key, value] of Object.entries(v)) {
      const valueR = tp(value)
      if (valueR.type === 'ERROR') {
        isValid = false
        errors.push(
          ...valueR.errors.map((e) => ({ ...e, keyPath: [key, ...e.keyPath] })),
        )
      }
    }
    if (isValid) return { type: 'VALUE', value: /** @type {any} */ (v) }
    return { type: 'ERROR', errors }
  }
}

/**
 * @param {'string' | 'number' | 'boolean' | 'undefined'} type
 * @returns {() => Parser<T>}
 * @template T
 */
function primitiveParser(type) {
  /**
   * @returns {Parser<T>}
   */
  return function () {
    return (v) => {
      return typeof v === type
        ? { type: 'VALUE', value: /** @type {T} */ (v) }
        : { type: 'ERROR', errors: [{ keyPath: [], message: `not a ${type}` }] }
    }
  }
}

/**
 * @returns {Parser<any>}
 */
export function any() {
  return (v) => {
    return { type: 'VALUE', value: /** @type {any} */ (v) }
  }
}

/** @type {import('./lib/types.js').tuple} */
export const tuple = (spec) => {
  return (v) => {
    let isValid = true
    /** @type {ParseError[]} */
    const errors = []
    if (!Array.isArray(v))
      return {
        type: 'ERROR',
        errors: [{ keyPath: [], message: 'is not an array' }],
      }
    if (v.length < spec.length)
      return {
        type: 'ERROR',
        errors: [{ keyPath: [], message: 'has an invalid length' }],
      }
    for (const [i, s] of spec.entries()) {
      const r = s(v.at(i))
      if (r.type === 'ERROR') {
        errors.push(
          ...r.errors.map((e) => ({
            ...e,
            keyPath: [String(i), ...e.keyPath],
          })),
        )
        isValid = false
      }
    }
    if (isValid) return { type: 'VALUE', value: /** @type {any} */ (v) }
    return { type: 'ERROR', errors }
  }
}
