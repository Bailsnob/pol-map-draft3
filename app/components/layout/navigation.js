// "use client";
import styles from "./navigation.module.css";
import Link from "next/link";
// import { GameState } from "@/app/context/game-context";
// import { useContext } from "react";

export default function Navigation() {
  // const {gameState, setGameState} = useContext(GameState);
  function handleClick() {
    console.log("awef");
    // setGameState({
    //   stage: "setting",
    //   states: null,
    //   minYear: null,
    //   maxYear: null,
    //   map: null,
    //   answer: null,
    //   result: null,
    // });
  }
  return (
    <header className={styles.header}>
      <Link href="/" className={styles["nav-length"]} id="home">HOME</Link>
      <nav>
        <ul>
          {/* <li>
            <Link href="/user" className={styles["nav-length"]}>User</Link>
          </li>
          <li>
            <Link href="/admin" className={styles["nav-length"]}>Admin</Link>
          </li>
          <li>
            <Link href="/login" className={styles["nav-length"]}>Sign In</Link>
          </li> */}
          <li>
            <Link href="/development" className={styles["nav-length"]}>Development</Link>
          </li>
          <li>
            <Link href="/about" className={styles["nav-length"]}>About</Link>
          </li>
          <li>
            <Link href="/instructions" className = {styles["nav-length"]}>Instructions</Link>
          </li>
          {/* <li>
            <Link href="/documentation" className={styles["nav-length"]}>Documentation</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}