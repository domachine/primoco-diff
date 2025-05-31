import { logger } from '#src/logger.js'
import express from 'express'
import { fileURLToPath } from 'node:url'
import { pinoHttp as PinoHttp } from 'pino-http'

/** @type {import('#vendor/viteExpress/lib.js').ViteExpressRequestHandlerFn} */
export default ({ outDir }) => {
  const router = express.Router()
  const pinoHttp = PinoHttp({ logger })

  router.use(pinoHttp)
  if (process.env.NODE_ENV !== 'production') {
    // The static is included in the production build so it only needs to be served
    // during development.
    router.use(
      express.static(fileURLToPath(new URL('mobile/static', import.meta.url))),
    )
  } else {
    // Vite takes care about the assets during development. For production the assets
    // are bundled in the `outDir` and are then served by the application.
    router.use(express.static(outDir))
  }

  return router
}
