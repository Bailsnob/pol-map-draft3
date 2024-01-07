"use client";

import { useContext, useState } from "react";
import { GameState } from "../context/game-context";

export default function GuessControls() {
  const { gameState, setGameState } = useContext(GameState);
  const [winner, setWinner] = useState("D");

  function handleGuessClick() {
    const answer = gameState.answer;
    // console.log(gameState.answer);
    fetch("/api/guess", {
      method: "POST",
      body: JSON.stringify({ winner: winner, answer: answer }),
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
      <br />
      <input type="button" value="guess" onClick={handleGuessClick} />
    </>
  );
}
