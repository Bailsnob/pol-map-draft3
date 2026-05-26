"use client";

import { useState } from "react";
import Link from "next/link";
import { COOL_ELECTIONS } from "@/app/data/cool-elections";
import styles from "@/app/styles/pollmap.module.css";

export default function ElectionsStuff() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={styles.contentScreen}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>Editorial</div>
        <h1>Cool elections</h1>
        <p>
          Deep dives into five presidential races that shaped American political
          history — and what they can teach us about today.
        </p>
      </div>

      <div className={styles.electionsList}>
        {COOL_ELECTIONS.map((e, i) => (
          <article
            key={e.year}
            className={styles.electionCard}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div
              className={styles.electionYearCol}
              style={e.yearColStyle || undefined}
            >
              <div className={styles.yearNumber}>{e.year}</div>
              <div className={styles.yearTag}>{e.tag}</div>
            </div>
            <div className={styles.electionBody}>
              <div className={styles.electionHook}>{e.hook}</div>
              <div className={styles.electionTitle}>{e.title}</div>
              <p
                className={`${styles.electionBodyText} ${
                  expanded === e.year ? "" : styles.electionBodyTextCollapsed
                }`}
              >
                {e.body}
              </p>
            </div>
            <div className={styles.electionActions}>
              <Link href="/" className={`${styles.ecBtn} ${styles.ecBtnPlay}`}>
                ▶ Play
              </Link>
              <button
                type="button"
                className={styles.ecBtn}
                onClick={() =>
                  setExpanded(expanded === e.year ? null : e.year)
                }
              >
                {expanded === e.year ? "Show less" : "Read more"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
