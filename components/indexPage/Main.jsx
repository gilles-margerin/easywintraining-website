import styles from "./Main.module.scss";

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>{children}</div>
    </main>
  );
};

export default Main;
