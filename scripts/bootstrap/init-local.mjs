import { run } from "../readiness/lib/exec.mjs";

await run("pnpm", ["install"]);
await run("node", ["./scripts/bootstrap/sync-env-templates.mjs"]);
await run("node", ["./scripts/readiness/doctor.mjs"]);

console.log("PH55 local bootstrap complete");