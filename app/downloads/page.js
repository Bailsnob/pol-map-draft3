"use client";

import { useEffect, useState, useCallback } from "react";
import { US_STATES } from "@/app/lib/states";
import styles from "@/app/styles/pollmap.module.css";

export default function Downloads() {
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    if (state) params.set("state", state);
    if (search) params.set("search", search);
    const res = await fetch(`/api/downloads?${params}`);
    const json = await res.json();
    if (json.status === "OK") {
      setRows(json.results);
      setTotal(json.total);
    }
    setLoading(false);
  }, [type, state, search]);

  useEffect(() => {
    load();
  }, [load]);

  function downloadCsv(row) {
    const url = `/api/download?type=Presidential&year=${row.year}&state=${encodeURIComponent(row.state)}`;
    window.open(url, "_blank");
  }

  return (
    <div className={styles.contentScreen} style={{ maxWidth: 960 }}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>Open data</div>
        <h1>Election data downloads</h1>
        <p>
          County-level results for presidential races in the archive — freely
          downloadable as CSV.
        </p>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label>Election type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All types</option>
            <option value="pres">Presidential</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>State</label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">All states</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Search</label>
          <input
            type="text"
            placeholder="e.g. 2020, Georgia…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button type="button" className={styles.filterApply} onClick={load}>
          Filter
        </button>
      </div>

      <div className={styles.resultsMeta}>
        {loading
          ? "Loading…"
          : `Showing ${rows.length} of ${total} results`}
      </div>

      <div className={styles.dlTableWrap}>
        <table className={styles.dlTable}>
          <thead>
            <tr>
              <th>Year</th>
              <th>State</th>
              <th>Type</th>
              <th>Race</th>
              <th>Winner</th>
              <th>Margin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.year}-${row.state}`}>
                <td>
                  <span style={{ fontFamily: "var(--font-mono)" }}>
                    {row.year}
                  </span>
                </td>
                <td>{row.state}</td>
                <td>
                  <span
                    className={`${styles.typePill} ${styles.typePillPres}`}
                  >
                    {row.race}
                  </span>
                </td>
                <td>
                  {row.year} {row.state} {row.race}
                </td>
                <td>
                  <span
                    style={{
                      fontWeight: 600,
                      color:
                        row.winner === "D" ? "var(--blue)" : "var(--red)",
                    }}
                  >
                    {row.winnerName}
                  </span>
                </td>
                <td style={{ fontFamily: "var(--font-mono)" }}>{row.margin}</td>
                <td>
                  <button
                    type="button"
                    className={styles.dlLink}
                    onClick={() => downloadCsv(row)}
                  >
                    ↓ CSV
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
