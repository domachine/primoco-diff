import * as r from '#vendor/runtype/lib.js'

const configParseResult = r.type({
  website: r.type({
    port: r.number(),
  }),
})((await import('config')).default)

if (configParseResult.type === 'ERROR') {
  throw new Error(
    `Failed to parse config: ${JSON.stringify(configParseResult.errors, null, 2)}`,
  )
}

export const config = configParseResult.value
