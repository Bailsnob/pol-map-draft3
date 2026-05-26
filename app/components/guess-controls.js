"use client";

import { useContext, useState } from "react";
import { GameState } from "../context/game-context";
import styles from "./guess-controls.module.css";

export default function GuessControls() {
  const { gameState, setGameState } = useContext(GameState);
  const [winner, setWinner] = useState("D");
  const [date, setDate] = useState("2024");
  const [margin, setMargin] = useState("0.1");

  function handleGuessClick() {
    const answer = gameState.answer;
    fetch("/api/guess", {
      method: "POST",
      body: JSON.stringify({
        winner: winner,
        date: date,
        margin: margin,
        answer: answer,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.status === "OK") {
          setGameState({
            ...gameState,
            stage: "finished",
            result: response.data.echo,
          });
        } else {
          console.error("Something went wrong!!!");
        }
      })
      .catch((err) => console.log("SOMETHING WENT WRONG!", err));
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Your guesses</p>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="winner-guess" className={styles.label}>
            Who won the state?
          </label>
          <select
            className={styles.select}
            name="winner-guess"
            id="winner-guess"
            title="Which party won?"
            value={winner}
            onChange={(e) => setWinner(e.target.value)}
          >
            <option value="D">Democrat</option>
            <option value="R">Republican</option>
            <option value="I">Independent</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="date-guess" className={styles.label}>
            Election year
          </label>
          <input
            type="number"
            className={styles.input}
            name="date-guess"
            id="date-guess"
            min={1932}
            max={2024}
            step={1}
            placeholder="e.g. 2008"
            title="When was the election?"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span className={styles.hint}>Presidential cycles from 1932 onward.</span>
        </div>

        <div className={styles.field}>
          <label htmlFor="margin-guess" className={styles.label}>
            Winning margin (%)
          </label>
          <input
            type="number"
            className={styles.input}
            name="margin-guess"
            id="margin-guess"
            min={0}
            max={100}
            step={0.1}
            placeholder="e.g. 3.2"
            title="Approximate statewide margin for the winner"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
          />
          <span className={styles.hint}>Positive number; your estimate of the spread.</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.submit}
        onClick={handleGuessClick}
      >
        Submit guess
      </button>
    </div>
  );
}
