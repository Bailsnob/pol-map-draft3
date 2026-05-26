"use client";
import Image from "next/image";

import { useContext } from "react";
import { GameState } from "../context/game-context";
import styles from "./map-panel.module.css";

export default function MapPanel() {
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
    <div className={styles.mapPanel}>
      {gameState.stage === "setting" && (
        <div className={styles.intro}>
          <header className={styles.introHeader}>
            <p className={styles.kicker}>Electoral geography challenge</p>
            <h1 className={styles.headline}>
              Read the map. Nail the year, winner, and margin.
            </h1>
            <p className={styles.lede}>
              Use the panel on the left to narrow states and years, then hit{" "}
              <strong>Start</strong>. A choropleth appears in the frame—your job
              is to infer which party carried the state, in which election, and
              by roughly what margin.
            </p>
          </header>

          <div className={styles.cards}>
            <section className={styles.card}>
              <h2>How a round works</h2>
              <p>
                After you start, study the county colors, then enter your
                guesses in the left column and press <strong>Guess</strong> to
                see how you scored.
              </p>
            </section>

            <section className={styles.card}>
              <h2>Settings</h2>
              <p>
                The multi-select lists which states can be drawn. Leave all
                selected for the full country, or trim to states you know well.
                Min and max year bound the random election window—for example
                2000–2024 for modern contests only.
              </p>
            </section>

            <section className={styles.card}>
              <h2>Tips</h2>
              <h3>Winner</h3>
              <p>
                Weighted population centers often decide outcomes. In Illinois,
                Cook County and the collar counties usually tell the story—who
                wins there often wins statewide.
              </p>
              <h3>Year</h3>
              <p>
                Look for regional realignments. In Texas, a dominant Democratic
                Rio Grande Valley that suddenly looks competitive often signals
                a more recent cycle.
              </p>
              <h3>Margin</h3>
              <p>
                Check the winner&apos;s vote share in the largest counties—high
                fifties or low sixties in urban cores often pairs with a modest
                statewide margin; runaway shares suggest a blowout.
              </p>
            </section>
          </div>
        </div>
      )}

      {gameState.stage === "guessing" && (
        <div className={styles.mapStage}>
          <div className={styles.challengeBar}>
            <span className={styles.challengeLabel}>Map challenge</span>
            <span className={styles.challengeHint}>
              Year · party · margin
            </span>
          </div>
          <div className={styles.mapFrame}>
            <Image
              alt="Election choropleth map to guess"
              src={gameState.map}
              fill
              sizes="(max-width: 900px) 100vw, 75vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      )}

      {gameState.stage === "finished" && (
        <div className={styles.resultWrap}>
          <div className={styles.resultCard}>
            <div className={styles.resultTitle}>Your results</div>
            <div className={styles.resultBody}>{gameState.result}</div>
          </div>
          <button
            type="button"
            className={styles.playAgainMain}
            onClick={handleReset}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
