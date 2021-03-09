import styles from './Aside.module.scss'
import GoogleMap from './GoogleMap'

const Aside = ({ apiKey }) => {
  return (
    <aside className={styles.aside}>
      <h3>
        Easywintraining Games
      </h3>

      <address>
        <a href="tel:+33-6-63-96-36-63">
          06.63.96.36.63
        </a>
        <br/>
        <a href="mailto:easywintraining@gmail.com">
          easywintraining@gmail.com 
        </a>
        <br/>
        25 rue de la lanterne 
        <br/>
        66000 Perpignan
      </address>

      <p>
        Association de jeux de société et d'activités ludiques
      </p>

      <GoogleMap apiKey={apiKey} />

    </aside>
  )
}

export default Aside