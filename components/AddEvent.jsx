const AddEvent = () => {
  return (
    <form>
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
        <input type="text" id="eventDescription" name="eventDescription"/>
      </div>
      <div>
        <label htmlFor="eventTypeAnimation">Animations ludiques</label>
        <input type="radio" id="eventTypeAnimation" name="eventTypeAnimation" value="Animations ludiques" checked/>
        <label htmlFor="eventTypeEvent">Evènements</label>
        <input type="radio" id="eventTypeEvent" name="eventTypeEvent" value="Evènements"/>
        <label htmlFor="eventTypeAmbiant">Jeux d'ambiance</label>
        <input type="radio" id="eventTypeAmbiant" name="eventTypeAmbiant" value="Jeux d'ambiance"/>
        <label htmlFor="eventTypeBoard">Jeux de plateau / stratégie</label>
        <input type="radio" id="eventTypeBoard" name="eventTypeBoard" value="Jeux de plateau / stratégie"/>
        <label htmlFor="eventTypeJdr">Jeu de rôles</label>
        <input type="radio" id="eventTypeJdr" name="eventTypeJdr" value="Jeu de rôles"/>
        <label htmlFor="eventTypeTradi">Jeux traditionnels</label>
        <input type="radio" id="eventTypeTradi" name="eventTypeTradi" value="Jeux traditionnels"/>
      </div>
    </form>
  )
}

export default AddEvent