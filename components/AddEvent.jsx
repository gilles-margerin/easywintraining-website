import styles from "./modules/AddEvent.module.scss"

const AddEvent = () => {
  return (
    <form className={styles.form} action="https://easywintraining-api.herokuapp.com/api/addevent" method="POST">
      <div>
        <label htmlFor="eventDate">Date</label>
        <input type="date" id="eventDate" name="eventDate" required/>
      </div>
      <div>
        <label htmlFor="eventTime">Horaires</label>
        <input type="text" name="eventTime" id="eventTime" required/>
      </div>
      <div>
        <label htmlFor="eventName">Nom de l'activité</label>
        <input type="text" id="eventName" name="eventName" required/>
      </div>
      <div>
        <label htmlFor="eventPlace">Lieu de l'activité</label>
        <input type="text" id="eventPlace" name="eventPlace" required/>
      </div>
      <div>
        <label htmlFor="eventDescription">Description</label>
        <textarea id="eventDescription" name="eventDescription" required></textarea>
      </div>
      <div>
        <label htmlFor="eventType">Type d'activité</label>
        <select name="eventType" id="eventType" required>
          <option>Animations ludiques</option>
          <option>Evènements</option>
          <option>Jeux d'ambiance</option>
          <option>Jeux de plateau / stratégie</option>
          <option>Jeux de rôles</option>
          <option>Jeux traditionnels</option>
        </select>
      </div>
      <button id="formSubmit">Ajouter</button>
    </form>
  )
}

export default AddEvent