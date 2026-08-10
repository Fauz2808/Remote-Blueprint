export function mergeProgress(...sources: Array<Record<string, unknown>>) {
  const merged: Record<string, boolean> = {}
  for (const source of sources) {
    for (const [id, completed] of Object.entries(source)) {
      if (completed === true) merged[id] = true
    }
  }
  return merged
}
