"use client";

import { useContext, useState } from "react";
import { GameState } from "../context/game-context";

export default function SettingControls() {
  const { gameState, setGameState } = useContext(GameState);
  const [states, setStates] = useState();
  const [minYear, setMinYear] = useState("1964");
  const [maxYear, setMaxYear] = useState("2020");

  function handleStartClick() {
    let randomState = states[Math.floor(Math.random() * states.length)];
    let randomYear =
      Number(minYear) +
      4 * Math.floor(Math.random() * ((maxYear - minYear) / 4 + 1));
    const answer = { state: randomState, year: randomYear };
    // console.log(randomYear);
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

  function handleMinYearChange(e) {
    setMinYear(e.target.value);
    // console.log(e.target.value);
  }

  function handleMaxYearChange(e) {
    setMaxYear(e.target.value);
    // console.log(e.target.value);
  }

  function handleStatesChange() {
    let options = document.getElementById("state-restriction").selectedOptions;
    let values = Array.from(options).map(({ value }) => value);
    setStates(values);
    // console.log(values.length);
  }

  return (
    <>
      <h1>
        <u>Settings</u>
      </h1>
      <label for="state-restriction" class="form-label">
        States:
      </label>
      <br />
      <select
        class="form-select menu-input"
        name="state-restriction"
        id="state-restriction"
        data-bs-toggle="tooltip"
        title="What states do you want to use?"
        onChange={handleStatesChange}
        multiple
      >
        {/* <!-- <option selected>Winner</option> --> */}
        <option value="Alabama">Alabama</option>
        {/* <option value="Alaska">Alaska</option> */}
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
      Min Date:{" "}
      <input
        type="number"
        min="1964"
        max="2020"
        defaultValue={"1964"}
        onChange={handleMinYearChange}
      />
      <br></br>
      Max Date:{" "}
      <input
        type="number"
        min="1964"
        max="2020"
        defaultValue={"2020"}
        onChange={handleMaxYearChange}
      />
      <br />
      <br />
      <input type="button" value="start" onClick={handleStartClick} />
    </>
  );
}
