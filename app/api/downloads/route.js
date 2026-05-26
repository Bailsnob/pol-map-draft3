import { NextResponse } from "next/server";
import {
  buildDownloadsCatalog,
  filterCatalog,
} from "@/app/lib/downloads-catalog";

let cachedCatalog = null;

function getCatalog() {
  if (!cachedCatalog) cachedCatalog = buildDownloadsCatalog();
  return cachedCatalog;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "";
  const state = searchParams.get("state") || "";
  const search = searchParams.get("search") || "";

  const all = getCatalog();
  const filtered = filterCatalog(all, { type, state, search });

  return NextResponse.json({
    status: "OK",
    total: all.length,
    count: filtered.length,
    results: filtered.slice(0, 200),
  });
}
