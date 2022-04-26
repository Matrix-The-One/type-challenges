type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T]: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}
