"use client";

import { useState } from "react";
import { DEFAULT_PLAYABLE_STATES } from "@/app/lib/playable-states";
import styles from "@/app/styles/pollmap.module.css";
import gifStyles from "./page.module.css";

const FRAME_DELAY_MS = 1200;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

export default function GifGeneratorPage() {
  const [state, setState] = useState("Florida");
  const [minYear, setMinYear] = useState("1952");
  const [maxYear, setMaxYear] = useState("1964");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [meta, setMeta] = useState(null);

  async function handleGenerate() {
    setError(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setMeta(null);
    setStatus("loading");

    try {
      const params = new URLSearchParams({ state, minYear, maxYear });
      const res = await fetch(`/api/gif/frames?${params}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Could not load frames.");

      const { GIFEncoder, quantize, applyPalette } = await import("gifenc");
      const gif = GIFEncoder();
      let width = 0;
      let height = 0;

      const labelBarH = 36;

      for (const frame of json.frames) {
        const img = await loadImage(frame.url);
        width = img.width;
        height = img.height + labelBarH;
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#f0ede6";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0);

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, img.height, width, labelBarH);
        ctx.strokeStyle = "rgba(15, 15, 14, 0.1)";
        ctx.beginPath();
        ctx.moveTo(0, img.height);
        ctx.lineTo(width, img.height);
        ctx.stroke();
        ctx.fillStyle = "#0f0f0e";
        ctx.font = "600 17px var(--font-body), sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          `${frame.year} · ${json.state}`,
          width / 2,
          img.height + labelBarH / 2
        );

        const { data } = ctx.getImageData(0, 0, width, height);
        const palette = quantize(data, 256);
        const index = applyPalette(data, palette);
        gif.writeFrame(index, width, height, {
          palette,
          delay: FRAME_DELAY_MS,
        });
      }

      gif.finish();
      const blob = new Blob([gif.bytes()], { type: "image/gif" });
      setPreviewUrl(URL.createObjectURL(blob));
      setMeta({
        state: json.state,
        count: json.count,
        minYear: json.minYear,
        maxYear: json.maxYear,
      });
      setStatus("done");
    } catch (err) {
      setError(err.message || "GIF generation failed.");
      setStatus("error");
    }
  }

  function handleDownload() {
    if (!previewUrl || !meta) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = `${meta.state.replace(/\s+/g, "-")}-${meta.minYear}-${meta.maxYear}.gif`;
    a.click();
  }

  return (
    <div className={styles.contentScreen}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>Tools</div>
        <h1>GIF generator</h1>
        <p>
          Pick a state and a year range to build an animated GIF of presidential
          election maps—one frame per cycle (1932, 1936, …).
        </p>
      </div>

      <div className={`${styles.setupCard} ${gifStyles.card}`}>
        <h2>Build your animation</h2>

        <div className={styles.settingsGrid}>
          <div className={styles.settingGroup}>
            <label htmlFor="gif-state">State</label>
            <div className={styles.selectWrap}>
              <select
                id="gif-state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {DEFAULT_PLAYABLE_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.settingGroup}>
            <label htmlFor="gif-min-year">From year</label>
            <input
              id="gif-min-year"
              type="number"
              min={1932}
              max={2024}
              step={4}
              value={minYear}
              onChange={(e) => setMinYear(e.target.value)}
            />
          </div>
          <div className={styles.settingGroup}>
            <label htmlFor="gif-max-year">To year</label>
            <input
              id="gif-max-year"
              type="number"
              min={1932}
              max={2024}
              step={4}
              value={maxYear}
              onChange={(e) => setMaxYear(e.target.value)}
            />
          </div>
        </div>

        <p className={gifStyles.hint}>
          Example: Florida, 1952–1964 → frames for 1952, 1956, 1960, and 1964.
          Only years with maps in the archive are included.
        </p>

        {error && <div className={styles.errorBanner}>{error}</div>}

        <button
          type="button"
          className={styles.startBtn}
          onClick={handleGenerate}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Generating GIF…" : "Generate GIF"}
        </button>
      </div>

      {(status === "loading" || previewUrl) && (
        <div className={gifStyles.previewCard}>
          <h2 className={gifStyles.previewTitle}>
            {status === "loading" ? "Building animation…" : "Preview"}
          </h2>
          {status === "loading" && (
            <p className={gifStyles.loadingText}>
              Loading maps and encoding frames—this may take a moment.
            </p>
          )}
          {previewUrl && meta && (
            <>
              <p className={gifStyles.metaText}>
                {meta.state} · {meta.count} frame{meta.count !== 1 ? "s" : ""}{" "}
                ({meta.minYear}–{meta.maxYear})
              </p>
              <div className={gifStyles.previewFrame}>
                <img
                  src={previewUrl}
                  alt={`${meta.state} presidential maps ${meta.minYear} to ${meta.maxYear}`}
                  className={gifStyles.previewGif}
                />
              </div>
              <button
                type="button"
                className={`${styles.guessBtn} ${styles.guessBtnPrimary} ${gifStyles.downloadBtn}`}
                onClick={handleDownload}
              >
                Download GIF
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
