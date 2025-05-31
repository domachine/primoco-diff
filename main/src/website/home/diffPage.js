import { flashMessage } from '#src/flashMessage.js'
import { dsvFormat } from 'd3-dsv'
import { html } from 'htm/preact'
import { useRef, useState } from 'preact/hooks'

/**
 * @typedef {object} BankTransaction
 * @property {string} value
 * @property {string} name
 * @property {string} description
 * @property {string} dateRaw
 * @property {boolean} matched
 */

/**
 * @typedef {object} PrimocoTransaction
 * @property {string} value
 * @property {string} name
 * @property {string} description
 * @property {string} dateRaw
 * @property {boolean} matched
 */

/** @type {import('preact').FunctionComponent} */
export const DiffPage = () => {
  /** @type {import('preact/hooks').MutableRef<HTMLInputElement | null>} */
  const bankFileInput = useRef(null)
  /** @type {import('preact/hooks').MutableRef<HTMLInputElement | null>} */
  const primocoFileInput = useRef(null)

  const [bankTransactions, setBankTransactions] = useState(
    /** @type {BankTransaction[]} */ ([]),
  )
  const [primocoTransactions, setPrimocoTransactions] = useState(
    /** @type {PrimocoTransaction[]} */ ([]),
  )

  /**
   * @param {string} content
   * @returns
   */
  const parseGLS = (content) => {
    const data = dsvFormat(';').parse(content)
    return data
  }

  /**
   * @param {string} content
   * @returns
   */
  const parsePrimoco = (content) => {
    const firstNewline = content.indexOf('\n')
    const data = dsvFormat(';').parse(content.slice(firstNewline + 1))
    return data.filter((c) => c.Typ !== 'Umbuchung')
  }

  /**
   * @param {File} file
   * @returns
   */
  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = () => reject(reader.error)
      reader.readAsText(file, 'utf-8')
    })
  }

  const onChangeBankFileInput = async () => {
    const file = bankFileInput.current?.files?.[0]
    if (!file) return
    try {
      const content = await readFile(file)
      const lines = parseGLS(content)
      setBankTransactions(
        lines.map((t) => ({
          value: t.Betrag,
          name: t['Name Zahlungsbeteiligter'],
          description: t.Verwendungszweck,
          dateRaw: t['Valutadatum'],
          matched: false,
        })),
      )
    } catch (err) {
      document.body.appendChild(
        flashMessage({
          timeout: 3000,
          type: 'error',
          message:
            typeof err === 'object' && err !== null && 'message' in err
              ? String(err.message)
              : 'Failed to load file',
        }),
      )
    }
  }

  const onChangePrimocoFileInput = async () => {
    const file = primocoFileInput.current?.files?.[0]
    if (!file) return
    try {
      const content = await readFile(file)
      const lines = parsePrimoco(content)
      setPrimocoTransactions(
        lines.map((t) => ({
          value: t.Betrag,
          name: t.Kategorie,
          description: t.Notiz,
          dateRaw: t.Datum,
          matched: false,
        })),
      )
    } catch (err) {
      document.body.appendChild(
        flashMessage({
          timeout: 3000,
          type: 'error',
          message:
            typeof err === 'object' && err !== null && 'message' in err
              ? String(err.message)
              : 'Failed to load file',
        }),
      )
    }
  }

  const resetTransactions = () => {
    setBankTransactions([])
    setPrimocoTransactions([])
  }

  const compareTransactions = () => {
    const updatedBank = bankTransactions.map((trx) => {
      const matchIndex = primocoTransactions.findIndex(
        (pt) => pt.value === trx.value && !pt.matched,
      )
      if (matchIndex !== -1) {
        primocoTransactions[matchIndex].matched = true
        return { ...trx, matched: true }
      }
      return trx
    })

    const updatedPrimoco = primocoTransactions.map((trx) => ({
      ...trx,
      matched: trx.matched || false,
    }))

    setBankTransactions(updatedBank)
    setPrimocoTransactions(updatedPrimoco)
  }

  const currentYear = new Date().getFullYear()

  return html`
    <main>
      <h1 class="col-1 col-span-2">Kontoauszüge vergleichen</h1>

      <h2 class="col-1 column-title">Bank Auszug</h2>
      <div class="col-1">
        <label>
          <input
            id="bankFileInput"
            type="file"
            ref=${bankFileInput}
            onChange=${onChangeBankFileInput}
            required
          />
        </label>
      </div>

      <div class="col-1 col-span-2">
        <button class="a-btn a-btn--primary" onClick=${resetTransactions}>
          Zurücksetzen
        </button>
        <button class="a-btn a-btn--primary" onClick=${compareTransactions}>
          Vergleichen
        </button>
      </div>

      <div class="col-1">
        <table>
          <thead>
            <tr>
              <th style="text-align:right">Wert</th>
              <th>Datum</th>
              <th>Kategorie</th>
              <th>Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            ${bankTransactions.map(
              (t) => html`
                <tr
                  class="transaction ${t.value.startsWith('-')
                    ? 'spending'
                    : ''} ${t.matched ? 'matched' : ''}"
                >
                  <td>${t.value}</td>
                  <td style="font-family: monospace">${t.dateRaw}</td>
                  <td>${t.name}</td>
                  <td>${t.description}</td>
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>

      <h2 class="col-2 column-title">Primoco Auszug</h2>
      <div class="col-2">
        <label>
          <input
            id="primocoFileInput"
            type="file"
            ref=${primocoFileInput}
            onChange=${onChangePrimocoFileInput}
            required
          />
        </label>
      </div>

      <div class="col-2">
        <table>
          <thead>
            <tr>
              <th style="text-align:right">Wert</th>
              <th>Datum</th>
              <th>Kategorie</th>
              <th>Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            ${primocoTransactions.map(
              (t) => html`
                <tr
                  class="transaction ${t.value.startsWith('-')
                    ? 'spending'
                    : ''} ${t.matched ? 'matched' : ''}"
                >
                  <td>${t.value}</td>
                  <td style="font-family: monospace">${t.dateRaw}</td>
                  <td>${t.name}</td>
                  <td>${t.description}</td>
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>

      <footer class="col-1 col-span-2">
        Copyright
        <a href="https://dominik.burgdoerfer.com">Dominik Burgdörfer</a>
        &copy; ${currentYear}
      </footer>
    </main>
  `
}
