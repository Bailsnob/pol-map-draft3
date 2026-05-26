"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GameState } from "@/app/context/game-context";
import { pickPresidentialYear } from "@/app/lib/scoring";
import { pickRandomPlayableState } from "@/app/lib/playable-states";
import styles from "@/app/styles/pollmap.module.css";

export default function GameScreen() {
  const { gameState, setGameState, resetToSetup } = useContext(GameState);
  const router = useRouter();
  const [party, setParty] = useState(null);
  const [year, setYear] = useState("");
  const [margin, setMargin] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);

  const statusStyles = {
    right: styles.right,
    close: styles.close,
    wrong: styles.wrong,
  };

  useEffect(() => {
    if (gameState.stage === "setting" || !gameState.map) {
      router.replace("/");
    }
  }, [gameState.stage, gameState.map, router]);

  if (!gameState.map || gameState.stage === "setting") {
    return (
      <div className={styles.gameScreen}>
        <p className={styles.mapLoading}>Redirecting to setup…</p>
      </div>
    );
  }

  async function startRound() {
    const pool = gameState.states || [];
    const randomState = pickRandomPlayableState(pool);
    if (!randomState) return;

    const randomYear = pickPresidentialYear(
      gameState.minYear,
      gameState.maxYear
    );
    const answer = { state: randomState, year: randomYear };

    setLoadingNext(true);
    setParty(null);
    setYear("");
    setMargin("");

    try {
      const res = await fetch("/api/start", {
        method: "POST",
        body: JSON.stringify({
          minYear: gameState.minYear,
          maxYear: gameState.maxYear,
          states: pool,
          answer,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Could not load next map.");

      const headerAnswer = res.headers.get("x-pollmap-answer");
      const resolvedAnswer = headerAnswer
        ? JSON.parse(headerAnswer)
        : answer;
      const blob = await res.blob();
      const mapUrl = URL.createObjectURL(blob);
      if (gameState.map) URL.revokeObjectURL(gameState.map);

      setGameState({
        ...gameState,
        stage: "guessing",
        map: mapUrl,
        answer: resolvedAnswer,
        result: null,
        round: (gameState.round || 0) + 1,
      });
    } catch {
      /* keep current round on failure */
    } finally {
      setLoadingNext(false);
    }
  }

  async function handleSubmit() {
    if (!party || !year || margin === "") {
      alert("Please fill in all three fields before submitting.");
      return;
    }

    const winner =
      party === "dem" ? "D" : party === "rep" ? "R" : "I";
    setSubmitting(true);

    try {
      const res = await fetch("/api/guess", {
        method: "POST",
        body: JSON.stringify({
          winner,
          date: year,
          margin,
          answer: gameState.answer,
          difficulty: gameState.difficulty || "normal",
        }),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();
      if (json.status !== "OK") throw new Error(json.message);

      const newStreak =
        json.data.score >= 70
          ? (gameState.streak || 0) + 1
          : 0;

      setGameState({
        ...gameState,
        stage: "finished",
        result: json.data,
        streak: newStreak,
      });
    } catch (err) {
      alert(err.message || "Could not submit guess.");
    } finally {
      setSubmitting(false);
    }
  }

  const result = gameState.result;
  const showResults = gameState.stage === "finished" && result;

  return (
    <div className={styles.gameScreen}>
      <div className={styles.gameHeader}>
        <div className={styles.gameMeta}>
          <div className={styles.gameBadge}>
            <div className={styles.dot} />
            Round {gameState.round || 1}
          </div>
          <div className={styles.scoreStrip}>
            Streak <strong>{gameState.streak || 0}</strong>
          </div>
        </div>
        <button
          type="button"
          className={`${styles.guessBtn} ${styles.guessBtnSecondary} ${styles.guessBtnCompact}`}
          onClick={() => {
            resetToSetup();
            router.push("/");
          }}
        >
          ← New settings
        </button>
      </div>

      <div className={styles.mapContainer}>
        <div className={styles.mapArea}>
          <div className={styles.mapLabel}>State hidden · 1 election shown</div>
          <div className={styles.mapImageWrap}>
            {loadingNext ? (
              <span className={styles.mapLoading}>Loading next map…</span>
            ) : (
              <Image
                src={gameState.map}
                alt="Election choropleth map"
                fill
                sizes="(max-width: 1000px) 100vw, 1000px"
                style={{ objectFit: "contain" }}
                priority
                unoptimized
              />
            )}
          </div>
          <div className={styles.mapLegend}>
            <div className={styles.legendSwatch}>
              <div
                className={styles.swatch}
                style={{
                  background:
                    "linear-gradient(to right, #e8534a, #922b21)",
                }}
              />
              <span>Republican</span>
            </div>
            <div
              style={{
                width: 1,
                height: 14,
                background: "var(--border)",
              }}
            />
            <div className={styles.legendSwatch}>
              <div
                className={styles.swatch}
                style={{
                  background:
                    "linear-gradient(to right, #2980b9, #154360)",
                }}
              />
              <span>Democrat</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.guessPanel} ${
          showResults ? styles.guessPanelHidden : ""
        }`}
      >
        <div className={styles.guessPanelTitle}>
          <span>Your guess</span>
          <span className={styles.guessPanelHint}>
            All three fields required
          </span>
        </div>
        <div className={styles.guessGrid}>
          <div className={styles.guessField}>
            <label>Winning party</label>
            <div className={styles.partyBtns}>
              <button
                type="button"
                className={`${styles.partyBtn} ${styles.partyBtnDem} ${
                  party === "dem" ? styles.partyBtnDemActive : ""
                }`}
                onClick={() => setParty("dem")}
              >
                Democrat
              </button>
              <button
                type="button"
                className={`${styles.partyBtn} ${styles.partyBtnRep} ${
                  party === "rep" ? styles.partyBtnRepActive : ""
                }`}
                onClick={() => setParty("rep")}
              >
                Republican
              </button>
              <button
                type="button"
                className={`${styles.partyBtn} ${styles.partyBtnOther} ${
                  party === "other" ? styles.partyBtnOtherActive : ""
                }`}
                onClick={() => setParty("other")}
              >
                Other
              </button>
            </div>
          </div>
          <div className={styles.guessField}>
            <label>Election year</label>
            <input
              className={styles.guessInput}
              type="number"
              placeholder="e.g. 1996"
              min={1932}
              max={2024}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className={styles.guessField}>
            <label>Win margin (%)</label>
            <input
              className={styles.guessInput}
              type="number"
              placeholder="e.g. 4.2"
              step="0.1"
              min={0}
              max={100}
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
            />
            <div className={styles.marginHint}>
              How many points did the winner win by?
            </div>
          </div>
        </div>
        <div className={styles.guessActions}>
          <button
            type="button"
            className={`${styles.guessBtn} ${styles.guessBtnPrimary}`}
            onClick={handleSubmit}
            disabled={submitting || loadingNext}
          >
            {submitting ? "Scoring…" : "Submit guess"}
          </button>
          <button
            type="button"
            className={`${styles.guessBtn} ${styles.guessBtnSecondary}`}
            onClick={() => startRound()}
            disabled={loadingNext}
          >
            Skip this map
          </button>
        </div>
      </div>

      {showResults && (
        <div className={`${styles.resultPanel} ${styles.resultPanelShow}`}>
          <div className={styles.resultHeader}>
            <div className={styles.resultScoreCircle}>{result.score}</div>
            <div className={styles.resultHeaderText}>
              <h3>{result.headline}</h3>
              <p>
                {result.correct.state} · {result.correct.year}{" "}
                {result.correct.type} · {result.correct.winner} won
              </p>
            </div>
          </div>
          <div className={styles.resultRows}>
            <div className={styles.resultRow}>
              <span className={styles.rrLabel}>Party</span>
              <span className={styles.rrGuess}>{result.guesses.party}</span>
              <span
                className={`${styles.rrCorrect} ${
                  statusStyles[result.breakdown.party.status]
                }`}
              >
                {result.breakdown.party.detail}
              </span>
            </div>
            <div className={styles.resultRow}>
              <span className={styles.rrLabel}>Year</span>
              <span className={styles.rrGuess}>{result.guesses.year}</span>
              <span
                className={`${styles.rrCorrect} ${
                  statusStyles[result.breakdown.year.status]
                }`}
              >
                {result.breakdown.year.detail}
              </span>
            </div>
            <div className={styles.resultRow}>
              <span className={styles.rrLabel}>Margin</span>
              <span className={styles.rrGuess}>
                {Number(result.guesses.margin).toFixed(1)}%
              </span>
              <span
                className={`${styles.rrCorrect} ${
                  statusStyles[result.breakdown.margin.status]
                }`}
              >
                {result.breakdown.margin.detail}
              </span>
            </div>
          </div>
          <div className={styles.resultActions}>
            <button
              type="button"
              className={`${styles.guessBtn} ${styles.guessBtnPrimary}`}
              onClick={() => startRound()}
              disabled={loadingNext}
            >
              {loadingNext ? "Loading…" : "Next map →"}
            </button>
            <button
              type="button"
              className={`${styles.guessBtn} ${styles.guessBtnSecondary}`}
              onClick={() => {
                resetToSetup();
                router.push("/");
              }}
            >
              Change settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
