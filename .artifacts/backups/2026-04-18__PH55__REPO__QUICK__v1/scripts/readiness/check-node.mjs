const requiredMin = 22;
const current = process.versions.node;
const major = Number(current.split(".")[0]);

if (major < requiredMin) {
  console.error(`PH55 requires Node >= ${requiredMin}.x; found ${current}`);
  process.exit(1);
}

console.log(`Node version OK: ${current}`);