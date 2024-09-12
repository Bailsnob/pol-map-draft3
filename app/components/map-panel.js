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
          {/* <p>
            My name is Tejas Kohli and I am the author of this site. I made it
            because it was a convergence between two major interests of mine:
            political science and computer science. At the time of writing this,
            I am a junior in Lambert High School in Georgia. Along with
            political and computer science, I enjoy reading, watching television
            and movies, playing Minecraft, singing, playing piano, and listening
            to music. I participate in choir in school, and I have gone to the
            All State Chorus four times as of writing. I also am a member of my
            school's academic bowl team.
          </p>
          <br />
          <h4>My Favorites:</h4>
          <ul>
            <li>- Book: The Book Thief</li>
            <li>- TV Show: Andor</li>
            <li>- Movie: Everything Everywhere All At Once</li>
            <li>- Song: Ashitaka and San</li>
          </ul> */}
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
