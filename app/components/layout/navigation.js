"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { GameState } from "@/app/context/game-context";
import styles from "@/app/styles/pollmap.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/elections-stuff", label: "Cool Elections" },
  { href: "/development", label: "How It's Built" },
  { href: "/downloads", label: "Data Downloads" },
  { href: "/gif-generator", label: "GIF Generator" },
  { href: "/about-me", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { resetToSetup } = useContext(GameState);

  function handlePlayNow(e) {
    e.preventDefault();
    if (pathname === "/game") return;
    router.push("/");
    setTimeout(() => {
      document.getElementById("start-round-btn")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link
          href="/"
          className={styles.navLogo}
          onClick={() => resetToSetup()}
        >
          <div className={styles.logoMark} />
          PollMap
        </Link>
        <ul className={styles.navLinks}>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${
                  pathname === href ? styles.navLinkActive : ""
                }`}
                onClick={() => {
                  if (href === "/") resetToSetup();
                }}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${styles.navCta}`}
              onClick={handlePlayNow}
            >
              Play Now →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
