import styles from './Aside.module.scss'
import GoogleMap from './GoogleMap'

const Aside = ({ apiKey }) => {
  return (
    <aside className={styles.aside}>
      <div>
        <h3>
          Easywintraining Games
        </h3>

        <p>
          Association de jeux de société et d'activités ludiques
        </p>
        
        <address>
          25 rue de la lanterne 
          <br/>
          66000 Perpignan
          <br/>
          <a href="tel:+33-6-63-96-36-63">
            06.63.96.36.63
          </a>
          <br/>
          <a href="mailto:easywintraining@gmail.com">
            easywintraining@gmail.com 
          </a>
        </address>

        <time>
          <span>Lundi 20h30-01h00</span>
          <span>Vendredi 20h30-02h00</span>
          <span>Samedi 20h00-01h00 (sur réservation)</span >
          <span>Dimanche 14h00-19h00 (tous les 15 jours)</span>
        </time>
        
      </div>
      <GoogleMap apiKey={apiKey} />

    </aside>
  )
}

export default Aside