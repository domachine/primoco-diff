import { websiteBaseURL } from '#fixture/config.js'
import { expect, test } from '#fixture/playwright.js'

test('shows home page', async ({ page, clock }) => {
  await page.goto(websiteBaseURL.href)

  await expect(page.getByText('Hello world!')).toBeVisible()
  await expect(
    page.getByText(
      clock.defaultDate.toLocaleDateString('de', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    ),
  ).toBeVisible()

  await page.getByLabel('Vorname').fill('Max')
  await page.getByLabel('Nachname').fill('Mustermann')
  await page.getByRole('button', { name: 'Absenden' }).click()

  await expect(page.getByText('Hallo Max Mustermann')).toBeVisible()
})
