"use client";
import styles from "./navigation.module.css";
import Link from "next/link";
import { GameState } from "@/app/context/game-context";
import { useContext, useState } from "react";

export default function Navigation() {
  const { gameState, setGameState } = useContext(GameState);
  const [stage, setStage] = useState();
  function handleClick() {  
    fetch("/api/start");
    setGameState({
      ...gameState,
      stage: "setting",
      states: null,
      minYear: null,
      maxYear: null,
      map: null,
      answer: null,
      result: null,
    });
    setStage("setting");
  }
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles["nav-length"]}
        id="home"
        onClick={handleClick}
      >
        HOME
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/elections-stuff" className={styles["nav-length"]}>
              Cool Elections
            </Link>
          </li>
          <li>
            <Link href="/development" className={styles["nav-length"]}>
              Development
            </Link>
          </li>
          <li>
            <Link href="/downloads" className={styles["nav-length"]}>
              Downloadable Election Data
            </Link>
          </li>
          <li>
            <Link href="/instructions" className={styles["nav-length"]}>
              Instructions
            </Link>
          </li>
          <li>
            <Link href="/about-me" className={styles["nav-length"]}>
              About Me
            </Link>
          </li>
          {/* <li>
            <Link href="/game" className={styles["nav-length"]} id="game" onClick={handleClick}>
              Game
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
