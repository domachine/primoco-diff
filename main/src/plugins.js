import { logger } from '#src/logger.js'

const plugins = await Promise.all(
  [import('./plugins/testApi.js')].map((p) =>
    p.catch((e) => {
      if (e.code !== 'ERR_MODULE_NOT_FOUND') throw e
      return null
    }),
  ),
).then((plugins) => plugins.map((p) => p?.default))

export const Plugins = async () => {
  /** @type {import('node:http').Server[]} */
  const srvs = []

  for (const plugin of plugins) {
    if (!plugin) continue
    logger.info('loading server plugin ' + plugin.name)
    srvs.push(await plugin())
  }

  return srvs
}
