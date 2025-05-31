import { readFile } from 'node:fs/promises'

/** @type {import('../config/development.json')} */
const data = JSON.parse(
  await readFile(
    new URL('../config/development.json', import.meta.url),
    'utf-8',
  ),
)

export const configData = data

export const websiteBaseURL = new URL(`http://localhost:${data.website.port}`)
