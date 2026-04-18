import { pathExists, copyPath } from "../readiness/lib/io.mjs";

const mappings = [
  [".env.example", ".env.local"],
  ["apps/web/.env.example", "apps/web/.env.local"],
  ["apps/api/.env.example", "apps/api/.env.local"],
  ["apps/ops-console/.env.example", "apps/ops-console/.env.local"]
];

for (const [from, to] of mappings) {
  if (await pathExists(from) && !(await pathExists(to))) {
    await copyPath(from, to);
    console.log(`Created ${to} from ${from}`);
  }
}