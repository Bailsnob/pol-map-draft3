"use client";

import { useState, createContext } from "react";
import { DEFAULT_PLAYABLE_STATES } from "@/app/lib/playable-states";

export const GameState = createContext({
  gameState: null,
  setGameState: () => {},
  resetToSetup: () => {},
});

const initialSettings = {
  electionType: "Presidential",
  stateFilter: "",
  minYear: "1932",
  maxYear: "2024",
  difficulty: "normal",
  states: DEFAULT_PLAYABLE_STATES,
};

export default function GameContext({ children }) {
  const [gameState, setGameState] = useState({
    stage: "setting",
    ...initialSettings,
    map: null,
    answer: null,
    result: null,
    round: 0,
    streak: 0,
    loading: false,
    error: null,
  });

  function resetToSetup() {
    if (gameState.map) URL.revokeObjectURL(gameState.map);
    setGameState((prev) => ({
      ...prev,
      stage: "setting",
      map: null,
      answer: null,
      result: null,
      loading: false,
      error: null,
    }));
  }

  return (
    <GameState.Provider value={{ gameState, setGameState, resetToSetup }}>
      {children}
    </GameState.Provider>
  );
}

export { initialSettings };
