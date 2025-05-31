import assert from 'node:assert'
import { describe, test } from 'node:test'
import {
  any,
  array,
  boolean,
  literal,
  number,
  or,
  record,
  string,
  tuple,
  type,
} from './lib.js'

describe('runtype', () => {
  const schema = type({
    first: string(),
    second: number(),
    third: boolean(),
    fourth: literal(/** @type {const} */ ('3')),
    fifth: or([string(), number(), type({ foo: string() })]),
    sixth: array(type({ foo: string() })),
    seventh: record(type({ foo: string() })),
    eighth: any(),
    nineth: tuple([string(), number()]),
  })

  describe('valid samples', () => {
    for (const [i, sample] of [
      {
        first: 'my thing',
        second: 5,
        third: true,
        fourth: '3',
        fifth: 42,
        sixth: [{ foo: '3' }],
        seventh: {},
        nineth: ['test', 1],
      },
      {
        first: 'my thing',
        second: 5,
        third: true,
        fourth: '3',
        fifth: 42,
        sixth: [],
        seventh: {},
        nineth: ['test', 1],
      },
      {
        first: 'my thing',
        second: 5,
        third: true,
        fourth: '3',
        fifth: 42,
        sixth: [{ foo: '3' }, { foo: 'something' }],
        seventh: {},
        nineth: ['test', 1],
      },
    ].entries()) {
      test(`sample #${i + 1}`, () => {
        assert.deepStrictEqual(schema(sample), { type: 'VALUE', value: sample })
      })
    }
  })

  describe('failing samples', () => {
    for (const [i, sample] of [
      [
        {},
        [
          {
            keyPath: ['first'],
            message: 'not a string',
          },
          {
            keyPath: ['second'],
            message: 'not a number',
          },
          {
            keyPath: ['third'],
            message: 'not a boolean',
          },
          {
            keyPath: ['fourth'],
            message: 'does not equal "3"',
          },
          {
            keyPath: ['fifth'],
            message: 'not a string',
          },
          {
            keyPath: ['fifth'],
            message: 'not a number',
          },
          {
            keyPath: ['fifth'],
            message: 'is not an object',
          },
          {
            keyPath: ['sixth'],
            message: 'is not an array',
          },
          {
            keyPath: ['seventh'],
            message: 'is not an object',
          },
          {
            keyPath: ['nineth'],
            message: 'is not an array',
          },
        ],
      ],
      [
        {
          first: 3,
          second: 5,
          third: true,
          fourth: '3',
          fifth: 42,
          sixth: [{ foo: '3' }],
          seventh: {},
          nineth: ['test', 1],
        },
        [
          {
            keyPath: ['first'],
            message: 'not a string',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: '5',
          third: true,
          fourth: '3',
          fifth: 42,
          sixth: [{ foo: '3' }, { foo: 'something' }],
          seventh: {},
          nineth: ['test', 1],
        },
        [
          {
            keyPath: ['second'],
            message: 'not a number',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: 5,
          third: 3,
          fourth: '3',
          fifth: { foo: 'bar' },
          sixth: [],
          seventh: {},
          nineth: ['test', 1],
        },
        [
          {
            keyPath: ['third'],
            message: 'not a boolean',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: 5,
          third: true,
          fourth: '4',
          fifth: 42,
          sixth: [],
          seventh: {},
          nineth: ['test', 1],
        },
        [
          {
            keyPath: ['fourth'],
            message: 'does not equal "3"',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: 5,
          third: true,
          fourth: '3',
          fifth: 42,
          sixth: [{ foo: '3' }, { foo: 'something' }],
          seventh: { bar: {} },
          nineth: ['test', 1],
        },
        [
          {
            keyPath: ['seventh', 'bar', 'foo'],
            message: 'not a string',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: 5,
          third: true,
          fourth: '3',
          fifth: 42,
          sixth: [{ foo: '3' }, { foo: 'something' }],
          seventh: null,
          nineth: ['test', 1],
        },
        [
          {
            keyPath: ['seventh'],
            message: 'is not an object',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: 5,
          third: true,
          fourth: '3',
          fifth: 42,
          sixth: [{ foo: '3' }, { foo: 'something' }],
          seventh: undefined,
          nineth: ['test', 1],
        },
        [
          {
            keyPath: ['seventh'],
            message: 'is not an object',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: 5,
          third: true,
          fourth: '3',
          fifth: 42,
          sixth: [{ foo: '3' }, { foo: 'something' }],
          seventh: {},
          nineth: [],
        },
        [
          {
            keyPath: ['nineth'],
            message: 'has an invalid length',
          },
        ],
      ],
      [
        {
          first: 'my thing',
          second: 5,
          third: true,
          fourth: '3',
          fifth: 42,
          sixth: [{ foo: '3' }, { foo: 'something' }],
          seventh: {},
          nineth: [1, 'string'],
        },
        [
          {
            keyPath: ['nineth', '0'],
            message: 'not a string',
          },
          {
            keyPath: ['nineth', '1'],
            message: 'not a number',
          },
        ],
      ],
    ].entries()) {
      test(`sample #${i + 1}`, () => {
        assert.strictEqual(schema(sample[0]).type, 'ERROR')
        assert.deepStrictEqual(
          /** @type {any} */ (schema(sample[0])).errors,
          sample[1],
        )
      })
    }
  })

  test('can validate an object schema', () => {
    /** @type {unknown} */
    const v = {
      first: 'my thing',
      second: 5,
      third: true,
      fourth: '3',
      fifth: 42,
      sixth: [{ foo: '3' }],
      seventh: {},
      nineth: ['test', 1],
    }

    assert.deepStrictEqual(schema(v), { type: 'VALUE', value: v })
  })
})
