import { logger } from '#src/logger.js'
import { Plugins } from '#src/plugins.js'
import { runtimeDependencies } from '#src/runtime.js'
import { serve } from '#vendor/viteExpress/lib.js'
import viteExpressConfig from '#viteExpress.config.js'

const servers = [
  ...(await serve({ logger }, viteExpressConfig)),
  ...(await Plugins()),
]

process.on('SIGTERM', () => {
  logger.info('sigterm signal received')
  Promise.resolve().then(async () => {
    for (const srv of servers) {
      await new Promise((resolve) => {
        srv.close(() => {
          resolve(null)
        })
      })
    }
    for (const dep of runtimeDependencies) await dep.close()

    logger.info('all set, terminating')
  })
})
