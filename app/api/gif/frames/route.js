import { NextResponse } from "next/server";
import fs from "fs";
import { DEFAULT_PLAYABLE_STATES } from "@/app/lib/playable-states";
import { getPresidentialYearsInRange } from "@/app/lib/presidential-years";
import { getPresidentialMapPath } from "@/app/lib/map-path";

const MAX_FRAMES = 24;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state");
  const minYear = searchParams.get("minYear");
  const maxYear = searchParams.get("maxYear");

  if (!state || !DEFAULT_PLAYABLE_STATES.includes(state)) {
    return NextResponse.json(
      { status: "ERROR", message: "Please select a valid state." },
      { status: 400 }
    );
  }

  const years = getPresidentialYearsInRange(minYear, maxYear);
  const frames = years
    .filter((year) => fs.existsSync(getPresidentialMapPath(state, year)))
    .map((year) => ({
      year,
      url: `/api/map?state=${encodeURIComponent(state)}&year=${year}`,
    }));

  if (frames.length === 0) {
    return NextResponse.json(
      {
        status: "ERROR",
        message: "No maps found for that state and year range.",
      },
      { status: 404 }
    );
  }

  if (frames.length > MAX_FRAMES) {
    return NextResponse.json(
      {
        status: "ERROR",
        message: `Too many elections (${frames.length}). Narrow the year range to ${MAX_FRAMES} cycles or fewer.`,
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    status: "OK",
    state,
    minYear: frames[0].year,
    maxYear: frames[frames.length - 1].year,
    count: frames.length,
    frames,
  });
}
