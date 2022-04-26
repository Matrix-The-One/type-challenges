type First<T extends unknown[]> = T extends [infer R, ...infer Rest] ? R : never
