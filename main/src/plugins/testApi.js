import { clock } from '#src/clock.js'
import { logger } from '#src/logger.js'
import create from '#vendor/testClock/lib.js'
import express from 'express'

export default async function testApi() {
  const server = express()

  server.use('/clock', clockMiddleware())

  /** @type {import('node:http').Server} */
  const srv = await new Promise((resolve) => {
    const srv = server.listen(8111, () => {
      logger.info(srv.address(), 'listening')
      resolve(srv)
    })
  })

  return srv
}

function clockMiddleware() {
  const m = create()
  Object.assign(clock, m.clock)
  return m.router
}
