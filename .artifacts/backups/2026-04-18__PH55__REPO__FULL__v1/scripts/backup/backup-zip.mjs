import { packageDir, packageZip } from "./lib/naming.mjs";
import { createZipWithPowerShell } from "./lib/zip-powershell.mjs";
import { verifyPackageFolder, verifyZip } from "./lib/verify.mjs";

const kind = process.argv[2] || "QUICK";
const version = process.argv[3] || "v1";
const root = "./.artifacts/backups";

const dir = packageDir(root, kind, version);
const zip = packageZip(root, kind, version);

await verifyPackageFolder(dir);
await createZipWithPowerShell(dir, zip);
await verifyZip(zip);

console.log(`ZIP created: ${zip}`);