import { testApiBaseURL } from '#fixture/testApi.js'
import assert from 'node:assert'
import { parseArgs } from 'node:util'

const baseUrl = testApiBaseURL

/**
 * @param {Date} date
 */
export const set = async (date) => {
  const r = await fetch(new URL('/clock/set', baseUrl), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ now: date.toISOString() }),
  })
  assert(r.ok, r.statusText)
}

if (process.argv[1] === import.meta.filename) {
  const {
    positionals: [_date],
  } = parseArgs({ allowPositionals: true })
  assert(_date)
  const date = new Date(_date)
  assert(!Number.isNaN(date.getTime()))
  await set(date)
}
