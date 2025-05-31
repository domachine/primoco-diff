const publicDir = new URL('public/', import.meta.url)
const config = async () => (await import('#src/config.js')).config

/** @type {import('#vendor/viteExpress/lib.js').ViteExpressConfig} */
export default [
  {
    server: async () => ({
      port: (await config()).website.port,
      hmrPort: (await config()).website.port * 10,
    }),
    entry: new URL('src/website.js', import.meta.url),
    root: new URL('src/website', import.meta.url),
    outDir: new URL('website', publicDir),
    base: '/primoco-diff',
  },
]
