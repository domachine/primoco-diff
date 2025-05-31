import { h, render } from 'preact'
import { DiffPage } from './diffPage.js'

import '#src/flashMessage.client.js'
import '#src/taskIndicator.client.js'

export class DiffPageElement extends HTMLElement {
  connectedCallback() {
    render(h(DiffPage, {}), this)
  }
}

customElements.define('diff-page', DiffPageElement)
