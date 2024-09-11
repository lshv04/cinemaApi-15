import Sticker from "../Compontents/Sticker";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.poster}>
      <div className={styles.poster2}>
        <h2 className="text-center">Bem vindo ao meu catálogo de filmes. </h2>
        <Sticker />
      </div>
    </div>
  );
}

export default Home;
