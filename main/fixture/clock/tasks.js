import assert from 'node:assert'
import { testApiBaseURL } from '#fixture/testApi.js'
import { clockData } from './data.js'

export const defaultTime = clockData

const baseUrl = testApiBaseURL

export const clockTasks = {
  /**
   * @param {Date} date
   */
  async set(date) {
    const r = await fetch(new URL('/clock/set', baseUrl), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ now: date.toISOString() }),
    })
    assert(r.ok, r.statusText)
  },

  async clear() {
    const r = await fetch(new URL('/clock/clear', baseUrl), {
      method: 'POST',
    })
    assert(r.ok, r.statusText)
  },
}
