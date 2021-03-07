import styles from './Aside.module.scss'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h3>
        Easywintraining Games
      </h3>
      <address>
        25 rue de la lanterne 
        <br/>
        66000 Perpignan
      </address>
      <p>
        Association de jeux de société et d'activités ludiques
      </p>
      <p>
        Jeux de plateaux, jeux de stratégie, jeux de rôles, jeux traditionnels
      </p>
    </aside>
  )
}

export default Aside