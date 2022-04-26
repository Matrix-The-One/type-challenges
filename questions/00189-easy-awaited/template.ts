// type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
//   ? R extends Promise<any>
//     ? MyAwaited<R>
//     : R
//   : never

type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T
