import { run } from "./lib/exec.mjs";

await run("node", ["./scripts/readiness/check-node.mjs"]);
await run("node", ["./scripts/readiness/check-pnpm.mjs"]);
await run("node", ["./scripts/readiness/check-workspace.mjs"]);
await run("node", ["./scripts/readiness/check-env.mjs"]);

console.log("PH55 doctor passed");