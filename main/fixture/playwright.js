import { test as baseTest, expect } from '@playwright/test'
import { clock } from './clock/playwright.js'

/**
 * This record includes all globally available playwright fixtures (https://playwright.dev/docs/test-fixtures).
 */
const testFixtureRecord = {
  clock,
}

/** @typedef {import('./playwright/types.js').TestFixtureValueRecord<typeof testFixtureRecord>} TestFixtureValueRecord */

/** @typedef {typeof baseTest.extend<TestFixtureValueRecord>} TestExtend */

export const test = /** @type {TestExtend} */ (baseTest.extend)(
  testFixtureRecord,
)

export { expect }
