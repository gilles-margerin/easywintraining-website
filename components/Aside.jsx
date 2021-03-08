import styles from './Aside.module.scss'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h3>
        Easywintraining Games
      </h3>
      <address>
        06.63.96.36.63
        <br/>
        easywintraining@gmail.com 
        <br/>
        25 rue de la lanterne 
        <br/>
        66000 Perpignan
      </address>
      <p>
        Association de jeux de société et d'activités ludiques
      </p>
    </aside>
  )
}

export default Aside