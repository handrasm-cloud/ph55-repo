import { mkdir, readFile, writeFile, access, rm, cp, readdir, stat } from "node:fs/promises";
import { constants } from "node:fs";

export async function pathExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export async function ensureDir(path) {
  await mkdir(path, { recursive: true });
}

export async function readText(path) {
  return await readFile(path, "utf8");
}

export async function writeText(path, content) {
  await writeFile(path, content, "utf8");
}

export async function removePath(path) {
  await rm(path, { recursive: true, force: true });
}

export async function copyPath(source, target) {
  await cp(source, target, { recursive: true, force: true });
}

export async function listDir(path) {
  return await readdir(path);
}

export async function pathStats(path) {
  return await stat(path);
}