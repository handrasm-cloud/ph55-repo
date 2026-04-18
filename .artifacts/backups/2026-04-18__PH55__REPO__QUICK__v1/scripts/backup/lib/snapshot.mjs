import { ensureDir, copyPath } from "../../readiness/lib/io.mjs";

export async function snapshotRepo(targetDir, mode = "QUICK") {
  await ensureDir(targetDir);

  const common = [
    "package.json",
    "pnpm-workspace.yaml",
    "turbo.json",
    "tsconfig.base.json",
    "tsconfig.json",
    "apps",
    "packages",
    "scripts",
    "tooling",
    ".github",
    ".vscode",
    ".env.example",
    ".env.ci.example",
    ".env.release.example"
  ];

  const fullOnly = [
    ".changeset",
    "README.md",
    ".editorconfig",
    ".gitattributes",
    ".gitignore",
    ".npmrc",
    ".nvmrc"
  ];

  const selected = mode === "FULL" ? [...common, ...fullOnly] : common;

  for (const path of selected) {
    await copyPath(path, `${targetDir}/${path}`);
  }

  return selected;
}