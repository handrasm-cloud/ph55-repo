import { ensureDir, writeText } from "../readiness/lib/io.mjs";
import { packageDir } from "./lib/naming.mjs";
import { snapshotRepo } from "./lib/snapshot.mjs";
import { buildManifest } from "./lib/manifest-builder.mjs";
import { verifyPackageFolder } from "./lib/verify.mjs";

const root = "./.artifacts/backups";
const targetDir = packageDir(root, "FULL", "v1");

await ensureDir(root);

const includes = await snapshotRepo(targetDir, "FULL");
const manifest = buildManifest({
  kind: "FULL",
  version: "v1",
  includes,
  notes: ["PH55 append-only full snapshot"]
});

await writeText(`${targetDir}/MANIFEST.json`, JSON.stringify(manifest, null, 2));
await verifyPackageFolder(targetDir);

console.log(`Full package created: ${targetDir}`);