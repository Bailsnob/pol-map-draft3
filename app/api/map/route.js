import { NextResponse } from "next/server";
import fs from "fs";
import { DEFAULT_PLAYABLE_STATES } from "@/app/lib/playable-states";
import { getPresidentialMapPath } from "@/app/lib/map-path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state");
  const year = searchParams.get("year");

  if (!state || !year || !/^\d{4}$/.test(year)) {
    return NextResponse.json(
      { status: "ERROR", message: "Invalid state or year." },
      { status: 400 }
    );
  }

  if (!DEFAULT_PLAYABLE_STATES.includes(state)) {
    return NextResponse.json(
      { status: "ERROR", message: "Unknown state." },
      { status: 400 }
    );
  }

  const yearNum = Number(year);
  if (yearNum < 1932 || yearNum > 2024 || (yearNum - 1932) % 4 !== 0) {
    return NextResponse.json(
      { status: "ERROR", message: "Year must be a presidential year from 1932–2024." },
      { status: 400 }
    );
  }

  const filePath = getPresidentialMapPath(state, yearNum);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { status: "ERROR", message: "Map not found." },
      { status: 404 }
    );
  }

  const buffer = fs.readFileSync(filePath);
  return new NextResponse(buffer, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
}
