import { Asset } from '#src/asset.js'
import tailwind from '@tailwindcss/postcss'
import { glob } from 'glob'
import assert from 'node:assert'
import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { relative } from 'node:path/posix'
import { defineConfig } from 'vite'
import { pageMap } from './pages.js'

export default defineConfig({
  appType: 'custom',
  build: {
    target: 'esnext',
    manifest: true,
    rollupOptions: {
      input: await glob('**/@(*.css|app.webmanifest|client.js)', {
        cwd: new URL('.', import.meta.url),
        absolute: true,
      }),
    },
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    extensions: [],
  },
  plugins: [
    (() => {
      /** @type {import('vite').ResolvedConfig} */
      let config

      return {
        name: 'pwa-plugin',

        configResolved(c) {
          config = c
        },

        async configureServer(srv) {
          srv.middlewares.use((req, res, next) => {
            if (req.method !== 'GET') return next()

            const { url, originalUrl } = req

            assert(url)
            assert(originalUrl)

            const u = new URL(url, 'file:///')
            const pageName = '/' + relative(srv.config.base, u.pathname)
            const page = pageName.endsWith('/')
              ? pageMap.get(join(pageName, 'index.html'))
              : pageMap.get(pageName)

            if (!page) return next()

            page({
              asset: Asset({
                manifest: null,
                root: import.meta.dirname,
                base: srv.config.base,
              }),
              baseUrl: srv.config.base,
            })
              .then(async (html) => {
                res.end(await srv.transformIndexHtml(originalUrl, html))
              })
              .catch(next)
          })
        },

        async writeBundle({ dir }) {
          assert(dir)

          /** @type {import('vite').Manifest} */
          const manifest = JSON.parse(
            await readFile(join(dir, '.vite/manifest.json'), 'utf-8'),
          )

          for (const [pageName, pageFn] of pageMap) {
            const s = await pageFn({
              asset: Asset({
                manifest,
                root: import.meta.dirname,
                base: config.base,
              }),
              baseUrl: config.base,
            })
            await mkdir(dirname(join(dir, pageName)), { recursive: true })
            await writeFile(join(dir, pageName), s)
          }

          await cp(
            new URL('images', import.meta.url),
            join(dir, 'assets/images'),
            { recursive: true },
          )
        },
      }
    })(),
  ],
})
