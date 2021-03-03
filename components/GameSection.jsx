import Image from "next/image";
import styles from "./GameSection.module.scss";

const GameSection = ({ id, src, title, text }) => {
  return (
    <section className={styles.card} id={id}>
      <header>
        <Image src={src} width={365} height={345} />
      </header>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default GameSection;
