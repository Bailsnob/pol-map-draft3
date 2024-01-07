"use client";

import { useContext } from "react";
import { GameState } from "../context/game-context";
import GuessControls from "./guess-controls";
import SettingControls from "./setting-controls";
import styles from "./side-panel.module.css";

export default function SidePanel() {
  const {gameState} = useContext(GameState);

  return (
    <div className={styles.sidePanel}>
      {gameState.stage === "setting" && <SettingControls />}
      {gameState.stage === "guessing" && <GuessControls />}
    </div>
  );
}