import { pathExists } from "./lib/io.mjs";

const required = [
  "pnpm-workspace.yaml",
  "turbo.json",
  "tsconfig.base.json",
  "package.json",
  "apps",
  "packages",
  "scripts",
  "tooling"
];

let failed = false;

for (const path of required) {
  const exists = await pathExists(path);
  if (!exists) {
    console.error(`Missing required workspace path: ${path}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("Workspace shape OK");