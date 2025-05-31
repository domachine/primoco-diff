import { html } from '#vendor/htmlTemplating/lib.js'

/**
 * @param {import('./types.js').StaticContext} ctx
 * @param {object} params
 * @param {import('#vendor/htmlTemplating/lib.js').SafeHTML} [params.head]
 * @param {import('#vendor/htmlTemplating/lib.js').SafeHTML} params.body
 * @returns
 */
export const Layout = (ctx, { body, head }) => {
  const asset = ctx.asset.bind(ctx, import.meta.url)

  return html`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="${asset('./app.webmanifest')}" />
        ${head}
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}
