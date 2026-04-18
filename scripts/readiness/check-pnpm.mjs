import { execSync } from "node:child_process";

try {
  const version = execSync("pnpm --version", { encoding: "utf8" }).trim();
  const major = Number(version.split(".")[0]);

  if (major < 10) {
    console.error(`PH55 requires pnpm >=10; found ${version}`);
    process.exit(1);
  }

  console.log(`pnpm version OK: ${version}`);
} catch {
  console.error("pnpm is not installed or not available in PATH");
  process.exit(1);
}