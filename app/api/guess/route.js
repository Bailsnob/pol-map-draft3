import { NextResponse } from "next/server";
import solutions from "@/app/database/solutions.json";
import { parseSolutionKey, scoreGuess } from "@/app/lib/scoring";

export async function POST(request) {
  const body = await request.json();
  const winnerGuess = body.winner;
  const dateGuess = Number(body.date);
  const marginGuess = Number(body.margin);
  const correctYear = Number(body.answer.year);
  const correctState = body.answer.state;
  const difficulty = body.difficulty || "normal";

  const answerKey = solutions.Presidential[String(correctYear)]?.[correctState];
  if (!answerKey) {
    return NextResponse.json(
      { status: "ERROR", message: "No solution for that election." },
      { status: 400 }
    );
  }

  const { correctWinner, correctMargin, correctWinnerName } =
    parseSolutionKey(answerKey);

  const scored = scoreGuess({
    winnerGuess,
    dateGuess,
    marginGuess,
    correctWinner,
    correctMargin,
    correctYear,
    difficulty,
  });

  const partyGuessName =
    winnerGuess === "D"
      ? "Democrat"
      : winnerGuess === "R"
        ? "Republican"
        : "Other";

  let yearStatus = "wrong";
  let yearDetail = `✗ Off by ${scored.yearDiff} years`;
  if (scored.yearExact) {
    yearStatus = "right";
    yearDetail = "✓ Exact!";
  } else if (scored.yearClose) {
    yearStatus = "close";
    yearDetail = `≈ Off by ${scored.yearDiff} yr${scored.yearDiff > 1 ? "s" : ""}`;
  }

  let marginStatus = "wrong";
  let marginDetail = `✗ Off by ${scored.margDiff.toFixed(1)}%`;
  if (scored.marginExact) {
    marginStatus = "right";
    marginDetail = "✓ Within 1%";
  } else if (scored.marginClose) {
    marginStatus = "close";
    marginDetail = `≈ Off by ${scored.margDiff.toFixed(1)}%`;
  }

  return NextResponse.json({
    status: "OK",
    data: {
      score: scored.score,
      headline: scored.headline,
      totalRes: scored.totalRes,
      correct: {
        state: correctState,
        year: correctYear,
        winner: correctWinnerName,
        margin: correctMargin,
        type: "Presidential",
      },
      guesses: {
        party: partyGuessName,
        year: dateGuess,
        margin: marginGuess,
      },
      breakdown: {
        party: {
          correct: scored.partyCorrect,
          status: scored.partyCorrect ? "right" : "wrong",
          detail: scored.partyCorrect
            ? "✓ Correct"
            : `✗ ${correctWinnerName}`,
        },
        year: { status: yearStatus, detail: yearDetail },
        margin: { status: marginStatus, detail: marginDetail },
      },
      echo: `${scored.totalRes} The ${correctWinnerName} candidate won the ${correctYear} United States Presidential Election in ${correctState} by a margin of ${correctMargin}%.`,
    },
  });
}
