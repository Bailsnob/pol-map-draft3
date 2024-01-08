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
    states: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District Of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
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
