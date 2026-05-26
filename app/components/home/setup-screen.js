"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { GameState } from "@/app/context/game-context";
import { DEFAULT_PLAYABLE_STATES } from "@/app/lib/playable-states";
import { pickPresidentialYear } from "@/app/lib/scoring";
import { pickRandomPlayableState } from "@/app/lib/playable-states";
import { US_STATES } from "@/app/lib/states";
import styles from "@/app/styles/pollmap.module.css";

const DIFF_HINTS = {
  easy: "Margin scoring ±10%",
  normal: "Margin scoring ±5%",
  hard: "Margin scoring ±2%",
};

export default function SetupScreen() {
  const { gameState, setGameState } = useContext(GameState);
  const router = useRouter();
  const [htpOpen, setHtpOpen] = useState(false);
  const [electionType, setElectionType] = useState("Presidential");
  const [stateFilter, setStateFilter] = useState("");
  const [minYear, setMinYear] = useState("1932");
  const [maxYear, setMaxYear] = useState("2024");
  const [difficulty, setDifficulty] = useState("normal");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleStart() {
    if (electionType !== "Presidential") {
      setError("Only Presidential elections are playable right now.");
      return;
    }

    const pool = stateFilter
      ? [stateFilter]
      : DEFAULT_PLAYABLE_STATES;
    const randomState = pickRandomPlayableState(pool);
    if (!randomState) {
      setError("No playable state selected.");
      return;
    }

    const randomYear = pickPresidentialYear(minYear, maxYear);
    const answer = { state: randomState, year: randomYear };

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/start", {
        method: "POST",
        body: JSON.stringify({
          minYear,
          maxYear,
          states: pool,
          answer,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Could not load map.");
      }

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
        electionType,
        stateFilter,
        minYear,
        maxYear,
        difficulty,
        states: pool,
        map: mapUrl,
        answer: resolvedAnswer,
        result: null,
        round: (gameState.round || 0) + 1,
        loading: false,
        error: null,
      });

      router.push("/game");
    } catch (err) {
      setError(err.message || "Something went wrong loading the map.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.setupScreen}>
      <div className={styles.setupHero}>
        <h1>
          Guess the <span className={styles.redAccent}>election</span>
          <br />
          read the <span className={styles.blueAccent}>map</span>
        </h1>
        <p>
          A choropleth guessing game. Configure your round, study the county
          map, then guess the party, year, and margin.
        </p>
      </div>

      <div className={styles.setupCard}>
        <h2>Round settings</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "var(--ink3)",
              textTransform: "uppercase",
              letterSpacing: ".04em",
              display: "block",
              marginBottom: 6,
            }}
          >
            Election type
          </label>
          <div className={styles.electionTypeGrid}>
            <button
              type="button"
              className={`${styles.typeBtn} ${
                electionType === "Presidential" ? styles.typeBtnSelected : ""
              }`}
              onClick={() => setElectionType("Presidential")}
            >
              <span className={styles.typeLabel}>Presidential</span>
              <span className={styles.typeSub}>1932 – 2024</span>
            </button>
            <button
              type="button"
              className={`${styles.typeBtn} ${styles.typeBtnDisabled}`}
              title="Coming soon"
              disabled
            >
              <span className={styles.typeLabel}>Senate</span>
              <span className={styles.typeSub}>Coming soon</span>
            </button>
            <button
              type="button"
              className={`${styles.typeBtn} ${styles.typeBtnDisabled}`}
              title="Coming soon"
              disabled
            >
              <span className={styles.typeLabel}>Gubernatorial</span>
              <span className={styles.typeSub}>Coming soon</span>
            </button>
          </div>
        </div>

        <div className={styles.settingsGrid}>
          <div className={styles.settingGroup}>
            <label>State filter</label>
            <div className={styles.selectWrap}>
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
              >
                <option value="">Any state</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.settingGroup}>
            <label>Earliest year</label>
            <input
              type="number"
              min={1932}
              max={2024}
              value={minYear}
              onChange={(e) => setMinYear(e.target.value)}
            />
          </div>
          <div className={styles.settingGroup}>
            <label>Latest year</label>
            <input
              type="number"
              min={1932}
              max={2024}
              value={maxYear}
              onChange={(e) => setMaxYear(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.difficultyRow}>
          <span className={styles.difficultyLabel}>Difficulty</span>
          <div className={styles.difficultyPills}>
            {["easy", "normal", "hard"].map((d) => (
              <button
                key={d}
                type="button"
                className={`${styles.diffPill} ${
                  difficulty === d ? styles.diffPillActive : ""
                }`}
                onClick={() => setDifficulty(d)}
              >
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>
          <span className={styles.diffHint}>{DIFF_HINTS[difficulty]}</span>
        </div>

        {error && <div className={styles.errorBanner}>{error}</div>}

        <button
          id="start-round-btn"
          type="button"
          className={styles.startBtn}
          onClick={handleStart}
          disabled={loading}
        >
          {loading ? "Loading map…" : "Start round →"}
        </button>

        <div className={styles.howToPlayToggle}>
          <button
            type="button"
            className={styles.htpBtn}
            onClick={() => setHtpOpen(!htpOpen)}
          >
            <span>{htpOpen ? "▴" : "▾"}</span> How to play
          </button>
          <div
            className={`${styles.htpPanel} ${
              htpOpen ? styles.htpPanelOpen : ""
            }`}
          >
            <h3>What you&apos;re looking at</h3>
            <p>
              A county-level choropleth map of a US state election. Deeper red =
              stronger Republican, deeper blue = stronger Democrat.
            </p>
            <h3>Guessing the winner</h3>
            <p>
              Find the high-population counties (usually near cities). Whichever
              party dominates those areas usually wins statewide.
            </p>
            <h3>Guessing the year</h3>
            <p>
              Look for regional patterns that shifted over time — the Sun Belt
              realignment, rural drift, etc.
            </p>
            <h3>Guessing the margin</h3>
            <p>
              Deep saturated counties in the winner&apos;s color with thin
              losses elsewhere = large margin. Mixed shades = close race.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
