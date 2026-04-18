import { run } from "./lib/exec.mjs";

await run("node", ["./scripts/readiness/doctor.mjs"]);
await run("pnpm", ["install", "--frozen-lockfile"]);
await run("pnpm", ["run", "check"]);
await run("pnpm", ["run", "build"]);

console.log("PH55 CI smoke passed");