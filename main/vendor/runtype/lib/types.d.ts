export function literal<const V>(l: V): Parser<V>
export function tuple<A, B>(schema: [Parser<A>, Parser<B>]): Parser<[A, B]>

export type TypeOf<V> = T extends Parser<infer V> ? V : never

export type ParseError = { keyPath: string[]; message: string }

export type ParseResult<V> =
  | { type: 'ERROR'; errors: Array<ParseError> }
  | { type: 'VALUE'; value: V }

export type Parser<V> = (v: unknown) => ParseResult<V>
