/**
 * @typedef {object} RuntimeDependency
 * @property {() => Promise<void>} close
 */

/**
 * This is a list of runtime dependencies. They are being closed once all
 * http servers are terminated gracefully.
 *
 * @type {RuntimeDependency[]}
 */
export const runtimeDependencies = []
