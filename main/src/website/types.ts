export interface StaticContext {
  asset: (moduleUrl: string, path: string) => string
  baseUrl: string
}
