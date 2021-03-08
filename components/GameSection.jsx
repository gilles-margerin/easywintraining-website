import Image from "next/image";
import styles from "./GameSection.module.scss";

const GameSection = ({ id, src, title, text, active, toggleActive }) => {

  return (
    <section 
      className={active === id ? 
        `${styles.active} ${styles.card}`
        : styles.card} 
      id={id}
      onClick={(e) => toggleActive(e)}  
    >
      <header >
        <Image 
          src={src} 
          width={365} height={340} 
          objectFit="cover"
        />
      </header>
      <div className={styles.cardText}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default GameSection;

