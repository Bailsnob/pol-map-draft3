import styles from "@/app/styles/pollmap.module.css";

const MILESTONES = [
  {
    title: "Data collection",
    text: "Scraped election results from thousands of Wikipedia pages and Dave Leip's Election Atlas, supplementing with hand-transcribed county results from printed reference books. Raw data for every race going back to 1916.",
  },
  {
    title: "Coordinate mapping algorithm",
    text: "Built a custom algorithm to translate latitude/longitude coordinates into pixel positions — handling the non-linear projection math needed to render county shapes faithfully.",
    link: "https://github.com/Bailsnob/Pol_Map3/blob/main/preliminary/findCountyCoords.mjs",
  },
  {
    title: "Choropleth rendering engine",
    text: "Wrote a colorizer algorithm that reads vote-share data and generates county-level choropleth maps — computing color intensity from margin, blending party colors, and rendering clean PNG outputs at scale.",
    link: "https://github.com/Bailsnob/Pol_Map3/blob/main/preliminary/colorizerRewritten.mjs",
  },
  {
    title: "Map generation at scale",
    text: "Used the rendering engine to produce thousands of individual choropleth maps — one per state per election year — making up the full image library that powers the game and the data section.",
  },
  {
    title: "Downloadable CSV export",
    text: "Generated thousands of structured CSVs — one per race — containing county-level results. These are freely available to researchers on the Downloads page.",
  },
];

export default function DevelopmentPage() {
  return (
    <div className={styles.contentScreen}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>Behind the scenes</div>
        <h1>How it&apos;s built</h1>
      </div>

      <div className={styles.pageHeader} style={{ marginTop: "-1.5rem" }}>
        <p>
          What started in early 2022 as a personal project combining political
          science and computer science grew into a full data pipeline — scraping
          thousands of results, building custom mapping algorithms, and
          generating tens of thousands of choropleth images.
        </p>
      </div>

      <div className={styles.milestonesClean}>
        {MILESTONES.map((m) => (
          <div key={m.title} className={styles.milestoneClean}>
            <h3>{m.title}</h3>
            <p>
              {m.text}{" "}
              {m.link && (
                <a href={m.link} target="_blank" rel="noopener noreferrer">
                  View source ↗
                </a>
              )}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.coverageTable}>
        <h2>Data coverage</h2>
        <div className={styles.covRow}>
          <div>Presidential</div>
          <div className={styles.covBarWrap}>
            <div className={styles.covBar} style={{ width: "100%" }} />
          </div>
          <div className={styles.covYears}>1932 – 2024</div>
        </div>
        <div className={styles.covRow}>
          <div>Senate</div>
          <div className={styles.covBarWrap}>
            <div className={styles.covBar} style={{ width: "31%" }} />
          </div>
          <div className={styles.covYears}>1990 – 2022</div>
        </div>
        <div className={styles.covRow}>
          <div>Gubernatorial</div>
          <div className={styles.covBarWrap}>
            <div className={styles.covBar} style={{ width: "31%" }} />
          </div>
          <div className={styles.covYears}>1990 – 2022</div>
        </div>
      </div>

      <div className={styles.futureSection}>
        <h2>What&apos;s next</h2>
        <p>
          The goal is to keep extending the archive backwards — pushing
          presidential data further into history, and expanding senate and
          gubernatorial coverage. More party systems means more interesting maps
          and a deeper guessing pool.
        </p>
      </div>
    </div>
  );
}
