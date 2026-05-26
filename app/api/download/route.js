import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const ALLOWED_TYPES = new Set(["Presidential", "Senatorial", "Gubernatorial"]);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "Presidential";
  const year = searchParams.get("year");
  const state = searchParams.get("state");

  if (!ALLOWED_TYPES.has(type) || !year || !state) {
    return NextResponse.json(
      { status: "ERROR", message: "Missing type, year, or state." },
      { status: 400 }
    );
  }

  if (!/^\d{4}$/.test(year) || state.includes("..") || state.includes("/")) {
    return NextResponse.json(
      { status: "ERROR", message: "Invalid parameters." },
      { status: 400 }
    );
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "db",
    type,
    year,
    `${state}.csv`
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { status: "ERROR", message: "File not found." },
      { status: 404 }
    );
  }

  const buffer = fs.readFileSync(filePath);
  const response = new NextResponse(buffer);
  response.headers.set("content-type", "text/csv");
  response.headers.set(
    "content-disposition",
    `attachment; filename="${state}-${year}-${type}.csv"`
  );
  return response;
}
