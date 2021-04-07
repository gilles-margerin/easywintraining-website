import styles from "./modules/CalendarSideInfo.module.scss"

const CalendarSideInfo = () => {
  return (
<div className={styles.wrapper}>
  <p>
    Le calendrier est prévisionnel. Des tablées de jeux se rajoutent toujours au fur et à mesure du mois et s'improvisent lors des différentes soirées.
  </p>
  <p>
    <span></span>Animations ludiques
  </p>
  <p>
    <span></span>Evènements
  </p>
  <p>
    <span></span>Jeux d'ambiance
  </p>
  <p>
    <span></span>Jeux de plateau / stratégie
  </p>
  <p>
    <span></span>Jeux de rôles
  </p>
  <p>
    <span></span>Jeux traditionnels
  </p>
</div>
  )
}

export default CalendarSideInfo

