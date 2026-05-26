"use client";

import { useContext, useState } from "react";
import { GameState } from "../context/game-context";
import {
  DEFAULT_PLAYABLE_STATES,
  filterPlayableStates,
  pickRandomPlayableState,
} from "@/app/lib/playable-states";
import styles from "./setting-controls.module.css";

export default function SettingControls() {
  const { gameState, setGameState } = useContext(GameState);
  const [states, setStates] = useState(DEFAULT_PLAYABLE_STATES);
  const [minYear, setMinYear] = useState("1932");
  const [maxYear, setMaxYear] = useState("2024");

  function handleStartClick() {
    const randomState = pickRandomPlayableState(states);
    if (!randomState) return;
    let randomYear =
      Number(minYear) +
      4 * Math.floor(Math.random() * ((maxYear - minYear) / 4 + 1));
    const answer = { state: randomState, year: randomYear };
    fetch("/api/start", {
      method: "POST",
      body: JSON.stringify({
        minYear: minYear,
        maxYear: maxYear,
        states: states,
        answer: answer,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((blob) =>
        setGameState({
          ...gameState,
          stage: "guessing",
          states: states,
          minYear: minYear,
          maxYear: maxYear,
          map: blob,
          answer: answer,
        })
      )
      .catch((err) => console.log("SOMETHING WENT WRONG!", err));
  }

  function handleStatesChange() {
    let options = document.getElementById("state-restriction").selectedOptions;
    let values = filterPlayableStates(
      Array.from(options).map(({ value }) => value)
    );
    setStates(values.length > 0 ? values : DEFAULT_PLAYABLE_STATES);
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Round setup</p>

      <div className={styles.field}>
        <label htmlFor="state-restriction" className={styles.label}>
          States in play
        </label>
        <select
          className={styles.select}
          name="state-restriction"
          id="state-restriction"
          title="Hold Ctrl or Cmd to select multiple states"
          multiple
          defaultValue={states}
          onChange={handleStatesChange}
        >
          <option value="Alabama">Alabama</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
        <span className={styles.hint}>
          Ctrl/Cmd-click to change selection; all selected = full map pool.
        </span>
      </div>

      <div className={styles.yearRow}>
        <div className={styles.yearField}>
          <label htmlFor="min-year" className={styles.label}>
            Min year
          </label>
          <input
            id="min-year"
            type="number"
            className={styles.yearInput}
            min={1932}
            max={2024}
            defaultValue={1932}
            onChange={(e) => setMinYear(e.target.value)}
          />
        </div>
        <div className={styles.yearField}>
          <label htmlFor="max-year" className={styles.label}>
            Max year
          </label>
          <input
            id="max-year"
            type="number"
            className={styles.yearInput}
            min={1932}
            max={2024}
            defaultValue={2024}
            onChange={(e) => setMaxYear(e.target.value)}
          />
        </div>
      </div>

      <button type="button" className={styles.start} onClick={handleStartClick}>
        Start map
      </button>
    </div>
  );
}
