export function buildManifest({ kind, version, includes, notes = [] }) {
  return {
    phase: "PH55",
    foundation: "PH54_FROZEN",
    mode: "append-only",
    kind,
    version,
    generatedAt: new Date().toISOString(),
    includes,
    notes
  };
}