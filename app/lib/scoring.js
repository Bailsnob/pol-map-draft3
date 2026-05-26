export const DIFFICULTY_TOLERANCE = {
  easy: { year: 8, margin: 10 },
  normal: { year: 4, margin: 5 },
  hard: { year: 2, margin: 2 },
};

export function parseSolutionKey(answerKey) {
  const correctWinner = answerKey[0];
  const correctMargin = Number(answerKey.substring(1));
  let correctWinnerName = "Other";
  if (correctWinner === "r") correctWinnerName = "Republican";
  else if (correctWinner === "d") correctWinnerName = "Democrat";
  return { correctWinner, correctMargin, correctWinnerName };
}

export function scoreGuess({
  winnerGuess,
  dateGuess,
  marginGuess,
  correctWinner,
  correctMargin,
  correctYear,
  difficulty = "normal",
}) {
  const tol = DIFFICULTY_TOLERANCE[difficulty] || DIFFICULTY_TOLERANCE.normal;

  const partyCorrect =
    (correctWinner === "d" && winnerGuess === "D") ||
    (correctWinner === "r" && winnerGuess === "R") ||
    (correctWinner === "o" && winnerGuess === "I");

  const yearDiff = Math.abs(dateGuess - correctYear);
  const margDiff = Math.abs(marginGuess - correctMargin);

  const yearExact = yearDiff === 0;
  const yearClose = yearDiff <= tol.year;
  const marginExact = margDiff < 1;
  const marginClose = margDiff <= tol.margin;

  let score = 0;
  if (partyCorrect) score += 40;
  score += Math.max(0, 30 - yearDiff * 3);
  score += Math.max(0, 30 - margDiff * 4);
  score = Math.round(Math.min(100, score));

  const headlines = [
    [90, "Nailed it! Exceptional read."],
    [70, "Nice — pretty close!"],
    [50, "Decent guess, keep at it."],
    [0, "Tough one — better luck next map."],
  ];
  const headline = headlines.find(([min]) => score >= min)[1];

  let totalRes = "Incorrect!";
  if (partyCorrect && marginClose && yearClose) totalRes = "Correct!";
  else if (partyCorrect || marginClose || yearClose) totalRes = "Partially Correct!";

  return {
    score,
    headline,
    totalRes,
    partyCorrect,
    yearDiff,
    margDiff,
    yearExact,
    yearClose,
    marginExact,
    marginClose,
    tolerance: tol,
  };
}

export function pickPresidentialYear(minYear, maxYear) {
  let min = Math.max(1932, Number(minYear));
  let max = Math.min(2024, Number(maxYear));
  if (max < min) max = min;
  if ((min - 1932) % 4 !== 0) {
    min += 4 - ((min - 1932) % 4);
  }
  const years = [];
  for (let y = min; y <= max; y += 4) {
    years.push(y);
  }
  if (years.length === 0) years.push(2020);
  return years[Math.floor(Math.random() * years.length)];
}
