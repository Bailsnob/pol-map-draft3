import styles from "@/app/styles/pollmap.module.css";

const FAVES = [
  { cat: "Book", val: "The Poisonwood Bible" },
  { cat: "TV Show", val: "Andor" },
  { cat: "Movie", val: "Everything Everywhere All at Once" },
  { cat: "Song", val: "Ashitaka and San" },
  { cat: "Game", val: "Minecraft" },
];

export default function AboutMe() {
  return (
    <div className={`${styles.contentScreen} ${styles.contentScreenNarrow}`}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>About</div>
        <h1>The project</h1>
      </div>

      <div className={styles.aboutProjectBanner}>
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "0.5rem",
          }}
        >
          Why PollMap exists
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "white",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          Electoral geography is endlessly fascinating — and almost nobody
          visualizes it well.
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.65,
            position: "relative",
            zIndex: 1,
          }}
        >
          PollMap started as a way to build a serious county-level election
          database that anyone can use, and turned into a game that makes reading
          political maps genuinely addictive. Everything — the data pipeline, the
          rendering engine, the game — was built from scratch.
        </p>
      </div>

      <div className={styles.aboutCard}>
        <div className={styles.aboutIntro}>
          <div className={styles.avatarRing}>TK</div>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "0.2rem",
              }}
            >
              About the developer
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--ink3)", lineHeight: 1.65 }}>
              Tejas Kohli built PollMap as a convergence of two major interests:
              political science and computer science. At the time of writing,
              he&apos;s a junior at Lambert High School in Georgia — also a
              four-time All-State Chorus member and academic bowl team member.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.aboutCard}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.1rem",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          A few favorites
        </h2>
        <div className={styles.favesGrid}>
          {FAVES.map((f) => (
            <div key={f.cat} className={styles.faveItem}>
              <div className={styles.faveCat}>{f.cat}</div>
              <div className={styles.faveVal}>{f.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
