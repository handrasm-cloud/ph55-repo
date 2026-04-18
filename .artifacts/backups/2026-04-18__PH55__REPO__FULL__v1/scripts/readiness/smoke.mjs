import { run } from "./lib/exec.mjs";

await run("pnpm", ["run", "lint"]);
await run("pnpm", ["run", "typecheck"]);
await run("pnpm", ["run", "test"]);
await run("pnpm", ["run", "build"]);

console.log("PH55 smoke passed");