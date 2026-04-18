import { pathExists } from "./lib/io.mjs";

const requiredTemplates = [
  ".env.example",
  ".env.ci.example",
  ".env.release.example"
];

let failed = false;

for (const file of requiredTemplates) {
  if (!(await pathExists(file))) {
    console.error(`Missing env template: ${file}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("Env templates OK");