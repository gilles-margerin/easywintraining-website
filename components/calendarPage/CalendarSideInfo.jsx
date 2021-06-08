import styles from "./CalendarSideInfo.module.scss"

const CalendarSideInfo = () => {
  return (
<div className={styles.wrapper}>
  <p>
    Le calendrier est prévisionnel. Des tablées de jeux se rajoutent toujours au fur et à mesure du mois et s'improvisent lors des différentes soirées.
  </p>
  <p>
    Animations ludiques
  </p>
  <p>
    Evènements
  </p>
  <p>
    Jeux d'ambiance
  </p>
  <p>
    Jeux de plateau / stratégie
  </p>
  <p>
    Jeux de rôles
  </p>
  <p>
    Jeux traditionnels
  </p>
</div>
  )
}

export default CalendarSideInfo

