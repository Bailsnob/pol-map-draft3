"use client";

import { useContext } from "react";
import { GameState } from "../context/game-context";
import GuessControls from "./guess-controls";
import SettingControls from "./setting-controls";
import styles from "./side-panel.module.css";

export default function SidePanel() {
  const { gameState, setGameState } = useContext(GameState);

  function handleReset() {
    setGameState({
      stage: "setting",
      states: null,
      minYear: null,
      maxYear: null,
      map: null,
      answer: null,
      result: null,
    });
  }

  return (
    <aside className={styles.sidePanel}>
      <div className={styles.brand}>
        <h1 className={styles.brandTitle}>PollMap</h1>
        <span className={styles.brandTag}>Guess the election</span>
      </div>
      <div className={styles.inner}>
        {gameState.stage === "setting" && <SettingControls />}
        {gameState.stage === "guessing" && <GuessControls />}
        {gameState.stage === "finished" && (
          <div className={styles.finished}>
            <span className={styles.finishedBadge}>Round complete</span>
            <p className={styles.finishedText}>
              Scores are on the map side. Start another round with the same
              settings, or go back to tweak states and years first.
            </p>
            <button
              type="button"
              className={styles.playAgain}
              onClick={handleReset}
            >
              New round
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
