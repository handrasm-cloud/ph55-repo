import { run } from "../readiness/lib/exec.mjs";

await run("pnpm", ["install", "--frozen-lockfile"]);
await run("node", ["./scripts/readiness/doctor.mjs"]);

console.log("PH55 CI bootstrap complete");