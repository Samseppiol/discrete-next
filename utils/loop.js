export function times(count, f) {
  let results =[]
  let i =0
  while (i < count) {
    results.push(f(i))
    i += 1
  }
  return results
}
