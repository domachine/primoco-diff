import { TaskIndicatorElement } from '../taskIndicator.client.js'

declare global {
  interface HTMLElementTagNameMap {
    'task-indicator': TaskIndicatorElement
  }
}
