"use client";

import { useState, createContext } from "react";

export const GameState = createContext({
  stage: null,
  states: null,
  minYear: null,
  maxYear: null,
  map: null,
  answer: null,
  result: null,
});

export default function GameContext({ children }) {
  const [gameState, setGameState] = useState({
    stage: "setting", // vs "guessing" or "finished"
    states: null,
    minYear: null,
    maxYear: null,
    map: null,
    answer: null,
    result: null,
  });

  return (
    <GameState.Provider value={{ gameState, setGameState }}>
      {children}
    </GameState.Provider>
  );
}