import express from 'express'
import { basename, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * @typedef {object} ViteExpressRequestHandlerParams
 * @property {import('vite').ViteDevServer | null} viteDevServer
 * @property {string} root
 * @property {string} outDir
 * @property {string} base
 */

/** @typedef {(params: ViteExpressRequestHandlerParams) => (Promise<import('express').RequestHandler> | import('express').RequestHandler)} ViteExpressRequestHandlerFn */

/**
 * @typedef {object} ViteExpressRequestHandler
 * @property {ViteExpressRequestHandlerFn} default
 */

/**
 * @typedef {object} ServerConfig
 * @property {number} server.port
 * @property {number} [server.hmrPort]
 */

/**
 * @typedef {object} ViteExpressConfigEntry
 * @property {URL} entry
 * @property {URL} root
 * @property {URL} outDir
 * @property {string} [base]
 * @property {() => (ServerConfig | Promise<ServerConfig>)} server
 */

/** @typedef {ViteExpressConfigEntry[]} ViteExpressConfig */

/**
 * @param {object} params
 * @param {import('pino').Logger} params.logger
 * @param {ViteExpressConfig} config
 */
export const serve = async ({ logger }, config) => {
  /** @type {import('node:http').Server[]} */
  const servers = []

  for (const appConfig of config) {
    /** @typedef {ViteExpressRequestHandler} Handler */

    const { base = '/' } = appConfig
    const { port, hmrPort } = await appConfig.server()
    const root = resolve(fileURLToPath(appConfig.root))
    const entry = resolve(fileURLToPath(appConfig.entry))
    const outDir = resolve(fileURLToPath(appConfig.outDir))
    const app = express()
    /** @type {import('vite').ViteDevServer | undefined} */
    let viteDevServer

    if (process.env.NODE_ENV !== 'production') {
      /** @type {import('vite').InlineConfig} */
      const viteConfig = {
        base,
        root,
        cacheDir: join(root, '.vite'),
        server: {
          hmr: { port: hmrPort },
          middlewareMode: true,
        },
      }
      const vite = (viteDevServer = await (
        await import('vite')
      ).createServer(viteConfig))
      app.use(vite.middlewares)
      app.all('*rest', (req, res, next) => {
        const viteNext = (/** @type {any} */ e) => {
          if (e) vite.ssrFixStacktrace(e)
          next(e)
        }
        vite
          .ssrLoadModule(entry)
          .then(async (e) => {
            const { default: router } = /** @type {Handler} */ (e)
            const r = await router({ viteDevServer: vite, root, outDir, base })
            r(req, res, viteNext)
          })
          .catch(viteNext)
      })
    } else {
      const { default: router } = /** @type {Handler} */ (await import(entry))
      app.use(base, await router({ viteDevServer: null, root, outDir, base }))
    }

    servers.push(
      await new Promise((resolve) => {
        const srv = app.listen(port, () => {
          const addr = /** @type {import('node:net').AddressInfo} */ (
            srv.address()
          )
          logger.info(addr, `${basename(entry, '.js')} listening`)
          const vite = viteDevServer
          if (vite) {
            srv.once('close', () => {
              vite.close()
            })
          }
          resolve(srv)
        })
      }),
    )
  }
  return servers
}

/**
 * @param {ViteExpressConfig} config
 */
export const build = async (config) => {
  const { build: viteBuild } = await import('vite')
  for (const { root, entry, outDir, base } of config) {
    console.log(
      `\nbuilding assets for ${basename(resolve(fileURLToPath(entry)), '.js')}\n`,
    )
    await viteBuild({
      root: fileURLToPath(root),
      base,
      build: { outDir: fileURLToPath(outDir), emptyOutDir: true },
    })
  }
}
