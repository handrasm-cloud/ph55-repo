import { packageDir, packageZip } from "./lib/naming.mjs";
import { verifyPackageFolder, verifyZip } from "./lib/verify.mjs";

const kind = process.argv[2] || "QUICK";
const version = process.argv[3] || "v1";
const root = "./.artifacts/backups";

await verifyPackageFolder(packageDir(root, kind, version));
await verifyZip(packageZip(root, kind, version));

console.log(`Backup verified for ${kind} ${version}`);