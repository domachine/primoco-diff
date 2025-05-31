/**
 * @param {object} params
 * @param {string} params.message
 * @param {'error' | 'success'} [params.type]
 * @param {number} [params.timeout]
 */
export const flashMessage = ({ timeout, message, type = 'success' }) => {
  const el = document.createElement('flash-message')
  if (timeout !== undefined) {
    el.dataset.timeout = String(timeout)
  }
  el.dataset.message = message
  el.dataset.type = type
  return el
}
