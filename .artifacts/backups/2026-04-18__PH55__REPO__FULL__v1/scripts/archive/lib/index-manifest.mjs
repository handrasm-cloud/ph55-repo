export function buildArchiveIndex(entries = []) {
  return {
    phase: "PH55",
    generatedAt: new Date().toISOString(),
    entries
  };
}