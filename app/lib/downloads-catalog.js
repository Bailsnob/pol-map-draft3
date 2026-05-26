import solutions from "@/app/database/solutions.json";
import fs from "fs";
import path from "path";

function winnerLabel(code) {
  if (code === "d") return { short: "D", name: "Democrat" };
  if (code === "r") return { short: "R", name: "Republican" };
  return { short: "O", name: "Other" };
}

function csvExists(type, year, state) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "db",
    type,
    String(year),
    `${state}.csv`
  );
  return fs.existsSync(filePath);
}

/** Build downloadable race rows from solutions + public/db CSV availability. */
export function buildDownloadsCatalog() {
  const rows = [];
  const presidential = solutions.Presidential || {};

  for (const [year, states] of Object.entries(presidential)) {
    for (const [state, answerKey] of Object.entries(states)) {
      if (!csvExists("Presidential", year, state)) continue;
      const winner = winnerLabel(answerKey[0]);
      const margin = `${Number(answerKey.substring(1)).toFixed(1)}%`;
      rows.push({
        year: Number(year),
        state,
        type: "pres",
        race: "Presidential",
        winner: winner.short,
        winnerName: winner.name,
        margin,
      });
    }
  }

  rows.sort((a, b) => b.year - a.year || a.state.localeCompare(b.state));
  return rows;
}

export function filterCatalog(rows, { type, state, search }) {
  let filtered = rows;
  if (type) filtered = filtered.filter((r) => r.type === type);
  if (state) filtered = filtered.filter((r) => r.state === state);
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.state.toLowerCase().includes(q) ||
        String(r.year).includes(q) ||
        r.race.toLowerCase().includes(q)
    );
  }
  return filtered;
}
