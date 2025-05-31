declare global {
  var _clock: { now: () => Date } | undefined
}
