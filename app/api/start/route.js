import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import solutions from "@/app/database/solutions.json";
import {
  EXCLUDED_STATES,
  filterPlayableStates,
  pickRandomPlayableState,
} from "@/app/lib/playable-states";
import { pickPresidentialYear } from "@/app/lib/scoring";

function hasMapAndSolution(state, year) {
  const imgPath = path.join(
    process.cwd(),
    "app",
    "database",
    "maps",
    "Presidential",
    String(year),
    `${state}.png`
  );
  const hasSolution = Boolean(
    solutions.Presidential[String(year)]?.[state]
  );
  return fs.existsSync(imgPath) && hasSolution;
}

function pickValidRound(playableStates, minYear, maxYear, maxAttempts = 80) {
  for (let i = 0; i < maxAttempts; i++) {
    const state = pickRandomPlayableState(playableStates);
    const year = pickPresidentialYear(minYear, maxYear);
    if (state && hasMapAndSolution(state, year)) {
      return { state, year };
    }
  }
  return null;
}

export async function POST(request) {
  const body = await request.json();
  let minYear = Number(body.minYear);
  if (minYear < 1932) minYear = 1932;
  else if (minYear > 2024) minYear = 2024;
  let maxYear = Number(body.maxYear);
  if (maxYear < minYear) maxYear = minYear;
  else if (maxYear > 2024) maxYear = 2024;

  const playableStates = filterPlayableStates(body.states || []);
  if (playableStates.length === 0) {
    return NextResponse.json(
      { status: "ERROR", message: "No playable states selected." },
      { status: 400 }
    );
  }

  let randomState = body.answer?.state;
  let randomYear = body.answer?.year;

  if (
    !randomState ||
    EXCLUDED_STATES.has(randomState) ||
    !playableStates.includes(randomState) ||
    !hasMapAndSolution(randomState, randomYear)
  ) {
    const picked = pickValidRound(playableStates, minYear, maxYear);
    if (!picked) {
      return NextResponse.json(
        {
          status: "ERROR",
          message: "No map found for the selected states and year range.",
        },
        { status: 404 }
      );
    }
    randomState = picked.state;
    randomYear = picked.year;
  }

  const imgPath = path.join(
    process.cwd(),
    "app",
    "database",
    "maps",
    "Presidential",
    `${randomYear}`,
    `${randomState}.png`
  );

  const imgBuffer = fs.readFileSync(imgPath);
  const response = new NextResponse(imgBuffer);
  response.headers.set("content-type", "image/png");
  response.headers.set(
    "x-pollmap-answer",
    JSON.stringify({ state: randomState, year: randomYear })
  );
  return response;
}
