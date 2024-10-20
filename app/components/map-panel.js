"use client";
import Image from "next/image";

import { useContext } from "react";
import { GameState } from "../context/game-context";
import styles from "./map-panel.module.css";

export default function MapPanel() {
  const { gameState, setGameState } = useContext(GameState);
  function handleReset() {
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
        // <>
        //   <br />
        //   <p>
        //     Click{" "}
        //     <b>
        //       <u>
        //         <a href="/elections-stuff">here</a>
        //       </u>
        //     </b>{" "}
        //     to learn about my favorite elections.
        //   </p>
        //   <p>
        //     Click{" "}
        //     <b>
        //       <u>
        //         <a href="/instructions">here</a>
        //       </u>
        //     </b>{" "}
        //     to play a game to learn more about electoral geography.
        //   </p>
        //   <p>
        //     Click{" "}
        //     <b>
        //       <u>
        //         <a href="/development">here</a>
        //       </u>
        //     </b>{" "}
        //     to learn about how I made this website.
        //   </p>
        //   <p>
        //     Click{" "}
        //     <b>
        //       <u>
        //         <a href="/about-me">here</a>
        //       </u>
        //     </b>{" "}
        //     to learn about me.
        //   </p>
        //   <p>
        //     Click{" "}
        //     <b>
        //       <u>
        //         <a href="/downloads">here</a>
        //       </u>
        //     </b>{" "}
        //     to download election data.
        //   </p>
        // </>
        <>
          <h1>Game Objective:</h1>
          <p>
            Once you click start in the settings on the left, a choropleth map
            of a state election will be displayed. Guess which party won, which
            year the election was held, and by what margin. Enter those in the
            boxes on the left. Then click guess and see how well you did.
          </p>
          <br />
          <h1>Instructions:</h1>
          <h3>Settings:</h3>
          <p>
            On the homepage, you will have the opportunity to change a few
            settings to decide which map you are provided. The first dropdown
            allows you to choose which states you want to play with. For
            example, if you are familiar with the politics of your home state,
            you could only choose it. Conversely, if you are familiar with the
            politics of every state, you can leave it blank or select
            everything. The two input boxes below allow you to chose between
            which years you want to guess. For example, if you are only familiar
            with elections in the 21st century, you could choose 2000 in the
            first input box and 2020 in the second.
          </p>
          <p>
            If you click with default settings, a choropleth for a random state
            election across the country will be displayed for you to guess. If
            you want to make the game a bit easier for yourself, pick a state or
            multiple states you are familiar with in the settings and you can
            narrow down the min and max dates which the election is chosen from.
          </p>
          <br />
          <h3>Tips and Tricks:</h3>
          <h4>Guessing the Winner:</h4>
          <p>
            Try looking for areas of the state with high population and see
            which side won. For example, in Illinois, Cook County (home to
            Chicago) and the Collar Counties that surround it contain most of
            the state's population, so, typically, if a candidate wins both Cook
            County and the Collar Counties, they win the election.
          </p>
          <h4>Guessing the Date:</h4>
          <p>
            It's hard to get exact answers with dates, but if you look
            carefully, you may be able to get an answer within 5 years of the
            correct one, or at least within the same party system. Look for
            areas that have changed their voting patterns over time. For
            example, in Texas, the Democrats have dominated the Rio Grande
            Valley until very recently (2020), so, if it seems like the
            Democratic candidate only narrowly won the valley, the election was
            probably more recent.
          </p>
          <h4>Guessing the Margin:</h4>
          <p>
            This is a bit more difficult, and really is best learned with
            practice. For starting, look for the winner's vote share in the high
            population areas. If it is in the 50s or 60s, that usually signifies
            a 0-5% margin, while anything larger signifies a larger margin.{" "}
          </p>
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
