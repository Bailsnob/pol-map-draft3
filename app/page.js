import styles from "./page.module.css";
import SidePanel from "./components/side-panel";
import MapPanel from "./components/map-panel";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>TOP-LEVEL HEADER</div>
      <div className={styles.menu}><SidePanel /></div>
      <div className={styles.main}><MapPanel /></div>  
    </div>
  );
}