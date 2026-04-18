import { spawn } from "node:child_process";

export function createZipWithPowerShell(sourceDir, zipPath) {
  return new Promise((resolve, reject) => {
    const command = [
      "-NoProfile",
      "-Command",
      `
      $src = '${sourceDir}';
      $zip = '${zipPath}';
      if (Test-Path $zip) { Remove-Item -LiteralPath $zip -Force }
      Compress-Archive -Path (Join-Path $src '*') -DestinationPath $zip -CompressionLevel Optimal
      `
    ];

    const child = spawn("powershell.exe", command, {
      stdio: "inherit"
    });

    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Compress-Archive failed with code ${code}`));
    });

    child.on("error", reject);
  });
}