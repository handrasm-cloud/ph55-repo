export function dateStamp() {
  return new Date().toISOString().slice(0, 10);
}

export function packageBaseName(kind = "QUICK", version = "v1") {
  return `${dateStamp()}__PH55__REPO__${kind}__${version}`;
}

export function packageDir(root, kind = "QUICK", version = "v1") {
  return `${root}/${packageBaseName(kind, version)}`;
}

export function packageZip(root, kind = "QUICK", version = "v1") {
  return `${root}/${packageBaseName(kind, version)}.zip`;
}