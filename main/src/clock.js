export const clock = (globalThis._clock ??= { now: () => new Date() })
