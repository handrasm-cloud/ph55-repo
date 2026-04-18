import { pathExists } from "../readiness/lib/io.mjs";

const required = [
  "./.artifacts/archive/PH55/ARCHIVE_INDEX.json"
];

let failed = false;

for (const path of required) {
  if (!(await pathExists(path))) {
    console.error(`Missing archive path: ${path}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("Archive verification passed");