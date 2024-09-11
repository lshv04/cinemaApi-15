import Sticker from "../Compontents/Sticker";
import styles from "./About.module.css";
import foto from "../img/logo.svg";

function About() {
  return (
    <div className={styles.posterabout}>
      <div className="container aboutcont">
        <h1>Sobre:</h1>
        <p>
          Esse projeto foi desenvolvido por Leandro Hosken utilizando API do
          site{" "}
          <a
            href="https://www.themoviedb.org/"
            className={styles.tmdb}
            target="_blank"
            rel="noopener noreferrer"
            id = "tmdb"
          >
            The Movie Database
          </a>
        </p>
        <img src={foto} alt="Logotipo" className={styles.img1} />{" "}
        <Sticker />
      </div>
    </div>
  );
}

export default About;
