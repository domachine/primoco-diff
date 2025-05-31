/** @typedef {() => Promise<void>} Task */

/**
 * @param {Task} task
 */
export const taskIndicator = (task) => {
  const el = document.createElement('task-indicator')
  el.task = task
  return el
}
