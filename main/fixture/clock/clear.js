import { testApiBaseURL } from '#fixture/testApi.js'
import assert from 'node:assert'

const baseUrl = testApiBaseURL

export const clear = async () => {
  const r = await fetch(new URL('/clock/clear', baseUrl), {
    method: 'POST',
  })
  assert(r.ok, r.statusText)
}

if (process.argv[1] === import.meta.filename) {
  await clear()
}
