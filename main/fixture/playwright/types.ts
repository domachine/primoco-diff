import { TestFixture } from '@playwright/test'

export type TestFixtureValue<T> =
  T extends TestFixture<infer R, infer _A> ? R : never

export type TestFixtureValueRecord<R> = {
  [K in keyof R]: TestFixtureValue<R[K]>
}
