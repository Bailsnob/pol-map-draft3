import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { useContext } from "react";
import { GameState } from "@/app/context/game-context";

export async function POST(request) {
  const body = await request.json();
  // console.log(body.bananas);
  // const {gameState, setGameState} = useContext(GameState);
  // console.log(body.minYear, body.maxYear, body.states);
  // const filePath = path.join(process.cwd(), "app", "database", "data.json");
  // const fileData = fs.readFileSync(filePath);
  // const data = JSON.parse(fileData);
  // const maps = data.maps;
  let minYear = Number(body.minYear);
  if (minYear < 1964) minYear = 1964;
  else if (minYear > 2020) minYear = 2020;
  let maxYear = Number(body.maxYear);
  if (maxYear < minYear) maxYear = minYear;
  else if (maxYear >= 2020) maxYear = 2020;
  const randomYear = body.answer.year
  const randomState = body.answer.state;
  const imgPath = path.join(
    process.cwd(),
    "app",
    "database",
    "maps",
    "Presidential",
    `${randomYear}`,
    `${randomState}.png`
  );
  // await setGameState({...GameState, answer: {year: randomYear, state: randomState}});
  const imgBuffer = fs.readFileSync(imgPath);
  const response = new NextResponse(imgBuffer);
  response.headers.set("content-type", "image/jpg");
  return response;
}