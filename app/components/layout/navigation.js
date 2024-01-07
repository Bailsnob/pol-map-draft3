import styles from "./navigation.module.css";
import Link from "next/link";
export default function Navigation() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles["nav-length"]}>HOME</Link>
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