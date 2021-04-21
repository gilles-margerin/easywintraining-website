import styles from "./modules/AddEvent.module.scss"

const AddEvent = ({ value }) => {
  const handleSubmit = () => {
    setTimeout(() => window.location.reload(), 1500)
  } 

  return (
    <form className={styles.form} method="POST" action='https://easywintraining-api.herokuapp.com/api/events' id="addForm">
      <div className={styles.formDiv}>
        <label htmlFor="eventDate">Date</label>
        <input className="formInput" type="text" id="eventDate" name="eventDate" value={value} readOnly required/>
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="eventTime">Horaires</label>
        <input className="formInput" type="text" name="eventTime" id="eventTime" required/>
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="eventName">Nom de l'activité</label>
        <input className="formInput" type="text" id="eventName" name="eventName" required/>
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="eventPlace">Lieu de l'activité</label>
        <input className="formInput" type="text" id="eventPlace" name="eventPlace" required/>
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="eventDescription">Description</label>
        <textarea className="formInput" id="eventDescription" name="eventDescription" required></textarea>
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="eventType">Type d'activité</label>
        <select className="formInput" name="eventType" id="eventType" required>
          <option>Animations ludiques</option>
          <option>Evènements</option>
          <option>Jeux d'ambiance</option>
          <option>Jeux de plateau / stratégie</option>
          <option>Jeux de rôles</option>
          <option>Jeux traditionnels</option>
        </select>
      </div>
      <button id="formSubmit" onClick={() => handleSubmit()}>Ajouter</button>
    </form>
  )
}

export default AddEvent