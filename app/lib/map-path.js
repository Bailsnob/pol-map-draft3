import path from "path";

export function getPresidentialMapPath(state, year) {
  return path.join(
    process.cwd(),
    "app",
    "database",
    "maps",
    "Presidential",
    String(year),
    `${state}.png`
  );
}
