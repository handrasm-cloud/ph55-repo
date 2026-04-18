import { ensureDir, writeText } from "../readiness/lib/io.mjs";

const manifest = {
  phase: "PH55",
  generatedAt: new Date().toISOString(),
  includes: [
    "root files",
    "apps",
    "packages",
    "scripts",
    "tooling",
    ".github",
    ".vscode"
  ]
};

await ensureDir("./.artifacts/manifests");
await writeText("./.artifacts/manifests/ph55-backup-manifest.json", JSON.stringify(manifest, null, 2));

console.log("Backup manifest written");