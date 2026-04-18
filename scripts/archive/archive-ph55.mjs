import { ensureDir, writeText, listDir, pathExists } from "../readiness/lib/io.mjs";
import { buildArchiveIndex } from "./lib/index-manifest.mjs";

const backupRoot = "./.artifacts/backups";
const archiveRoot = "./.artifacts/archive/PH55";

await ensureDir(archiveRoot);

const entries = (await pathExists(backupRoot))
  ? await listDir(backupRoot)
  : [];

await writeText(
  `${archiveRoot}/ARCHIVE_INDEX.json`,
  JSON.stringify(buildArchiveIndex(entries), null, 2)
);

console.log(`PH55 archive indexed with ${entries.length} entries`);