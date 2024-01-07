"use client";
import Image from "next/image";

import { useContext } from "react";
import { GameState } from "../context/game-context";
import styles from "./map-panel.module.css";

export default function MapPanel() {
  const { gameState } = useContext(GameState);

  // console.log(gameState.map);

  return (
    <div className={styles.mapPanel}>
      {gameState.stage === "setting" && <>NO MAP SHOWN</>}
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
      {gameState.stage === "finished" && <>{gameState.result}</>}
    </div>
  );
}
