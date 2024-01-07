"use client";

import { useContext, useState } from "react";
import { GameState } from "../context/game-context";

export default function GuessControls() {
  const { gameState, setGameState } = useContext(GameState);
  const [winner, setWinner] = useState("D");
  const [date, setDate] = useState("2020");
  const [margin, setMargin] = useState("0.1");

  function handleGuessClick() {
    const answer = gameState.answer;
    // console.log(gameState.answer);
    fetch("/api/guess", {
      method: "POST",
      body: JSON.stringify({ winner: winner, date: date, margin: margin, answer: answer }),
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

  function handleWinnerChange(e) {
    setWinner(e.target.value);
    // console.log(e.target.value);
    // setWinner(document.getElementById("winner-guess"));
    // console.log(document.getElementById("winner-guess"));
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleMarginChange(e) {
    setMargin(e.target.value);
  }

  return (
    <>
      <h1>
        <u>Guess</u>
      </h1>
      <label for="winner-guess" class="form-label">
        Winner:
      </label>
      <br />
      <select
        class="form-select menu-input"
        name="winner-guess"
        id="winner-guess"
        data-bs-toggle="tooltip"
        title="Which party won?"
        onChange={handleWinnerChange}
      >
        {/* <!-- <option selected>Winner</option> --> */}
        <option value="D">D</option>
        <option value="R">R</option>
        <option value="I">I</option>
      </select>
      <br />
      <label for="date-guess" class="form-label">
        Date:
      </label>
      <div class="form-floating">
        {/* <!-- <label for="date-guess" class="form-label">Date:</label> --> */}
        <input
          type="number"
          class="menu-input"
          name="date-guess"
          id="date-guess"
          min="1932"
          max="2022"
          step="1"
          placeholder="Date"
          data-bs-toggle="tooltip"
          title="When was the election?"
          onChange={handleDateChange}
        />
      </div>
      <label for="margin-guess" class="form-label">
        Margin:
      </label>
      <div class="form-floating">
        <input
          type="number"
          class="menu-input"
          name="margin-guess"
          id="margin-guess"
          min="0.0"
          max="100.0"
          step="0.1"
          placeholder="Margin"
          data-bs-toggle="tooltip"
          title="By how much did they win?"
          onChange={handleMarginChange}
        />
      </div>
      <br />
      <input type="button" value="guess" onClick={handleGuessClick} />
    </>
  );
}
