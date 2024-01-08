"use client";
import Image from "next/image";

import { useContext } from "react";
import { GameState } from "../context/game-context";
import styles from "./map-panel.module.css";

export default function MapPanel() {
  const { gameState, setGameState } = useContext(GameState);

  function handleReset() {
    console.log("awef");
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
        <>
          This is a game to test your knowledge of American Electoral Geography.
          Choose the states and range of years you want to be quizzed on. Check
          the about page for more information.
        </>
      )}
      {gameState.stage === "guessing" && (
        <>
          <Image
            alt="secret map"
            src={gameState.map}
            fill
            style={{ objectFit: "contain" }}
          />
        </>
      )}
      {gameState.stage === "finished" && (
        <>
          <p>{gameState.result}</p>
          <br />
          <input type="button" value="Play Again!" onClick={handleReset} />
        </>
      )}
    </div>
  );
}
