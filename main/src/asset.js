import { join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

/**
 * @param {object} params
 * @param {import('vite').Manifest | null} params.manifest
 * @param {string} params.root
 * @param {string} [params.base]
 */
export const Asset = ({ manifest, root, base = '/' }) => {
  /**
   * @param {string} moduleUrl
   * @param {string} path
   */
  return (moduleUrl, path) => {
    const absolutePath = path.startsWith('./')
      ? fileURLToPath(new URL(path, moduleUrl))
      : join(root, path)
    const p = absolutePath.slice(root.length + 1)
    if (manifest) {
      const entry = manifest[p]
      if (!entry) throw new Error(`manifest entry missing: ${p}`)
      return base + entry.file
    } else {
      return '/' + p
    }
  }
}
