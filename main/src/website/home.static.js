import { html } from '#vendor/htmlTemplating/lib.js'
import { renderDiffPage } from './home/diffPage.server.js'
import { Layout } from './layout.static.js'

/**
 * @param {import('./types.js').StaticContext} ctx
 */
export const home = async (ctx) => {
  const asset = ctx.asset.bind(ctx, import.meta.url)

  return html`
    ${Layout(ctx, {
      head: html`
        <link rel="stylesheet" href="${asset('./home/styles.css')}" />
        <script type="module" src="${asset('./home/client.js')}"></script>
      `,
      body: html`
        <!-- Diff Page -->
        ${renderDiffPage()}
      `,
    })}
  `.toString()
}
