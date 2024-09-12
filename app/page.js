// import styles from "./page.module.css";
// import SidePanel from "./components/side-panel";
// import MapPanel from "./components/map-panel";

// export default function Home() {
//   return (
//     <div className={styles.home}>
//       {/* <div className={styles.header}>TOP-LEVEL HEADER</div> */}
//       <div className={styles.menu}><SidePanel /></div>
//       <div className={styles.main}><MapPanel /></div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <>
      <h1>About the Developer</h1>
      <p>
        My name is Tejas Kohli and I am the author of this site. I made it
        because it was a convergence between two major interests of mine:
        political science and computer science. At the time of writing, I am a
        junior in Lambert High School in Georgia. Along with political and
        computer science, I enjoy reading, watching television and movies,
        playing Minecraft, singing, playing piano, and listening to music. I
        participate in choir in school, and I have gone to the All State Chorus
        four times. I also am a member of my school's academic bowl team, and I
        helped us get 16th place at PACE 2024.
      </p>
      <br />
      <h4>My Favorites:</h4>
      <ul>
        <li>- Book: The Book Thief</li>
        <li>- TV Show: Andor</li>
        <li>- Movie: Everything Everywhere All At Once</li>
        <li>- Song: Ashitaka and San</li>
      </ul>
    </>
  );
}
