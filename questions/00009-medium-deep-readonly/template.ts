type DeepReadonly<T> = T extends Record<string, unknown> | Array<unknown>
  ? { readonly [k in keyof T]: DeepReadonly<T[k]> }
  : T
