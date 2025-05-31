#!/usr/bin/env node

import { glob } from 'glob'
import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'

for (const packageLock of await glob('*/package-lock.json')) {
  console.log()
  console.log('    install', dirname(packageLock))
  console.log()
  const child = spawn('npm', ['ci'], {
    shell: true,
    stdio: 'inherit',
    cwd: dirname(join(process.cwd(), packageLock)),
  })
  /** @type {number | null} */
  const code = await new Promise((resolve, reject) => {
    child.on('exit', (code) => {
      process.exitCode = code ?? 0
      resolve(code)
    })
    child.on('error', reject)
  })
  if (code) break
}
