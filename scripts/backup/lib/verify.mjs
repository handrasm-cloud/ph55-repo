import { pathExists, pathStats } from "../../readiness/lib/io.mjs";

export async function verifyPackageFolder(packageDir) {
  const required = [
    `${packageDir}/MANIFEST.json`,
    `${packageDir}/package.json`,
    `${packageDir}/pnpm-workspace.yaml`,
    `${packageDir}/apps`,
    `${packageDir}/packages`,
    `${packageDir}/scripts`,
    `${packageDir}/tooling`
  ];

  for (const path of required) {
    if (!(await pathExists(path))) {
      throw new Error(`Missing required backup path: ${path}`);
    }
  }

  return true;
}

export async function verifyZip(zipPath) {
  if (!(await pathExists(zipPath))) {
    throw new Error(`Missing ZIP: ${zipPath}`);
  }

  const stats = await pathStats(zipPath);
  if (!stats.isFile() || stats.size <= 0) {
    throw new Error(`Invalid ZIP: ${zipPath}`);
  }

  return true;
}