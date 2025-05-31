import '#src/flashMessage.client.js'
import { flashMessage } from '#src/flashMessage.js'
import { html } from '#vendor/htmlTemplating/lib.js'

/** @typedef {import('./taskIndicator.js').Task} Task */

export class TaskIndicatorElement extends HTMLElement {
  #shadowRoot
  /** @type {Task | undefined} */
  #task
  /** @type {AbortController | undefined} */
  #connectedController = new AbortController()

  constructor() {
    super()

    this.#shadowRoot = this.attachShadow({ mode: 'open' })
  }

  /**
   * @param {Task} task
   */
  set task(task) {
    this.#task = task
  }

  connectedCallback() {
    const { signal } = (this.#connectedController = new AbortController())
    this.#renderLoader()

    this.#task?.()
      .catch((err) => {
        if (signal.aborted) return
        document.body.appendChild(
          flashMessage({
            type: 'error',
            message: err?.message ?? err?.name ?? JSON.stringify(err),
          }),
        )
      })
      .then(() => {
        this.remove()
      })
  }

  #renderLoader() {
    this.#shadowRoot.innerHTML = html`
      <style>
        #loader {
          opacity: 0;
          animation-name: fadein;
          animation-duration: 300ms;
          animation-delay: 200ms;
          animation-fill-mode: forwards;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        #loader[hidden] {
          display: none;
        }

        .lds-ripple {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }

        .lds-ripple div {
          position: absolute;
          border: 4px solid #fff;
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }

        @keyframes lds-ripple {
          0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
          }
          4.9% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
          }
          5% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
          }
        }
      </style>

      <div id="loader">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    `.toString()
  }

  disconnectedCallback() {
    this.#connectedController?.abort()
  }
}

customElements.define('task-indicator', TaskIndicatorElement)
