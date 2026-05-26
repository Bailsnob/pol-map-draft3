/**
 * Reliable dev startup for Windows + OneDrive:
 * - frees port 3000 if something is stuck there
 * - removes a stale .next cache (common source of hangs)
 * - enables file polling so the watcher works on synced folders
 */
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const nextDir = path.join(root, ".next");
const isWin = process.platform === "win32";

function sleep(ms) {
  if (isWin) {
    try {
      execSync(`powershell -Command "Start-Sleep -Milliseconds ${ms}"`, {
        stdio: "ignore",
      });
    } catch {
      /* ignore */
    }
  }
}

function freePort3000() {
  if (!isWin) return;
  try {
    const script = `
      $conns = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue
      foreach ($c in $conns) {
        Stop-Process -Id $c.OwningProcess -Force -ErrorAction SilentlyContinue
      }
    `;
    execSync(`powershell -NoProfile -Command "${script.replace(/\n/g, " ")}"`, {
      stdio: "ignore",
    });
  } catch {
    /* port already free */
  }
}

function cleanNext(retries = 4) {
  if (!fs.existsSync(nextDir)) return;
  for (let i = 0; i < retries; i++) {
    try {
      fs.rmSync(nextDir, { recursive: true, force: true });
      return;
    } catch (err) {
      if (i === retries - 1) {
        console.warn(
          "\nWarning: could not fully delete .next.",
          "Close other terminals running npm run dev, then try again.\n"
        );
      } else {
        sleep(800);
      }
    }
  }
}

console.log("Preparing dev server...\n");
freePort3000();
cleanNext();
sleep(500);

const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const env = {
  ...process.env,
  WATCHPACK_POLLING: "true",
};

console.log("Starting Next.js (first start may take 15–30s)...\n");

const child = spawn(process.execPath, [nextBin, "dev"], {
  cwd: root,
  env,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
