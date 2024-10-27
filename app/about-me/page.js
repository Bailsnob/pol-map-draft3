import styles from "./page.module.css";

export default function AboutMe() {
  return (
    <div className={styles.maindiv}>
      <h1>About the Developer</h1>
      <p>
        My name is Tejas Kohli and I am the author of this site. I made it
        because it was a convergence between two major interests of mine:
        political science and computer science. At the time of writing this, I
        am a junior in Lambert High School in Georgia. Along with political and
        computer science, I enjoy reading, watching television and movies,
        playing Minecraft, singing, playing piano, and listening to music. I
        participate in choir in school, and I have gone to the All State Chorus
        four times as of writing. I also am a member of my school's academic bowl team.
      </p>
      <br />
      <h4>My Favorites:</h4>
      <ul className={styles.bullet}>
        <li>Book: The Poisonwood Bible</li>
        <li>TV Show: Andor</li>
        <li>Movie: Everything Everywhere All At Once</li>
        <li>Song: Ashitaka and San</li>
        <li>Video Game: Minecraft</li>
      </ul>
    </div>
  );
}