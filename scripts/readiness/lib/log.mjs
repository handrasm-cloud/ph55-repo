export function info(message) {
  console.log(`[INFO] ${message}`);
}

export function warn(message) {
  console.warn(`[WARN] ${message}`);
}

export function fail(message) {
  console.error(`[FAIL] ${message}`);
}

export function ok(message) {
  console.log(`[OK] ${message}`);
}