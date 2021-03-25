import styles from "./modules/AddEvent.module.scss"

const AddEvent = () => {
  return (
    <form className={styles.form} action="/api/addevent" method="POST">
      <div>
        <label htmlFor="eventDate">Date</label>
        <input type="date" id="eventDate" name="eventDate"/>
      </div>
      <div>
        <label htmlFor="eventName">Nom de l'évènement</label>
        <input type="text" id="eventName" name="eventName"/>
      </div>
      <div>
        <label htmlFor="eventDescription">Description</label>
        <textarea id="eventDescription" name="eventDescription"></textarea>
      </div>
      <div>
        <label htmlFor="eventType">Type d'évènement</label>
        <select name="eventType" id="eventType">
          <option>Animations ludiques</option>
          <option>Evènements</option>
          <option>Jeux d'ambiance</option>
          <option>Jeux de plateau / stratégie</option>
          <option>Jeux de rôles</option>
          <option>Jeux traditionnels</option>
        </select>
      </div>
      <button id="formSubmit">Envoyer</button>
    </form>
  )
}

export default AddEvent