import { clear } from './clear.js'
import { clockData } from './data.js'
import { set } from './set.js'

/**
 * @typedef {object} Fixture
 * @property {(date: Date) => Promise<void>} set
 * @property {() => Promise<void>} clear
 * @property {Date} defaultDate
 */

/** @type {import('@playwright/test').TestFixture<Fixture, {}>} */
export const clock = async ({}, use) => {
  await set(clockData.defaultDate)
  await use({ set, clear, defaultDate: clockData.defaultDate })
  await clear()
}
