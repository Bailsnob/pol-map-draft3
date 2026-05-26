/**
 * Removes a stale project-root .next folder (common EINVAL/readlink failures
 * when the repo lives under OneDrive on Windows).
 */
const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");

if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
}
