import { html } from '#vendor/htmlTemplating/lib.js'

export class FlashMessage extends HTMLElement {
  #abortController = new AbortController()

  connectedCallback() {
    const { signal } = this.#abortController

    let time = this.dataset.timeout ? Number(this.dataset.timeout) : NaN

    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.innerHTML = html`
      <style>
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0;
          }
        }

        @keyframes slidein {
          from {
            translate: calc(100% + 1rem);
          }
          to {
            translate: 0;
          }
        }

        :host {
          --red-800: rgb(153 27 27);
          --gray-300: rgb(209 213 219);
          --gray-700: rgb(55 65 81);
          --red-50: rgb(254 242 242);
          --red-700: rgb(185 28 28);
          --red-800: rgb(153 27 27);
          --green-400: rgb(74 222 128);
          --font-sans:
            ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        }

        dialog {
          all: unset;
          display: grid;
          box-sizing: border-box;
          grid-template-columns: 2rem 1fr;
          position: fixed;
          inset: 1rem 1rem auto auto;
          padding-inline: 1.25rem;
          padding-block: 1.75rem;
          font-family: var(--font-sans);
          background-color: white;
          border-radius: 0.375rem;
          box-shadow: var(--box-shadow-md);
          border: solid 1px var(--gray-300);
        }

        dialog.error {
          background-color: var(--red-50);
          border-color: var(--red-700);
        }

        dialog:not([open]) {
          translate: calc(100% + 1rem);
          transition: translate 0.3s;
        }

        dialog[open] {
          animation: slidein 0.3s;
        }

        .dismiss-button {
          all: unset;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          inset: 0 0 auto auto;
          width: 1.5rem;
          aspect-ratio: 1;
          color: var(--gray-700);
          margin: 0.125rem 0.125rem auto auto;
        }

        .dismiss-button svg {
          display: block;
        }

        .bar {
          position: absolute;
          inset: auto 0 0 0;
          height: 0.25rem;
          border-radius: 0 0 0.25rem 0.25rem;
          background-color: rgb(107 114 128 / 0.5);
        }

        .visible .bar {
          animation: shrink var(--shrink-time, 300ms) linear forwards;
        }

        dialog > p {
          all: unset;
          font-size: 1rem;
          align-content: center;
        }

        dialog.error > p {
          color: var(--red-800);
        }
      </style>

      <dialog class="${this.dataset.type === 'error' ? 'error' : 'success'}">
        <button class="dismiss-button">
          <svg
            width="20"
            height="20"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18 18 6M6 6l12 12"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        ${this.dataset.type === 'error'
          ? html`
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                style="color: var(--red-700)"
              >
                <path
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            `
          : html`
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                height="24"
                width="24"
                style="color: var(--green-400)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            `}
        <p>${this.dataset.message}</p>
        ${!Number.isNaN(time)
          ? html`
              <div
                class="bar"
                style="--shrink-time: ${time.toString()}ms"
              ></div>
            `
          : html``}
      </dialog>
    `.toString()

    const dialog = shadowRoot.querySelector('dialog')
    const dismissButton = shadowRoot.querySelector('.dismiss-button')

    if (!(dialog && dismissButton instanceof HTMLButtonElement)) {
      debugger
      return
    }

    dismissButton.addEventListener(
      'click',
      () => {
        dialog.close()
      },
      { signal },
    )

    shadowRoot.addEventListener(
      'transitionend',
      (e) => {
        if (e instanceof TransitionEvent && e.propertyName === 'translate') {
          dialog.classList.remove('visible')
          this.remove()
        }
      },
      { signal },
    )

    shadowRoot.addEventListener(
      'animationend',
      (e) => {
        if (e instanceof AnimationEvent && e.animationName === 'slidein') {
          dialog.classList.add('visible')
        }
      },
      { signal },
    )

    shadowRoot.addEventListener(
      'animationend',
      (e) => {
        if (e instanceof AnimationEvent && e.animationName === 'shrink')
          dialog.close()
      },
      { signal },
    )

    dialog.show()
    dialog.classList.add('active')
  }

  disconnectedCallback() {
    this.#abortController?.abort()
  }
}

customElements.define('flash-message', FlashMessage)
