import styles from "./modules/AddEvent.module.scss"
import Input from "./Input"

const AddEvent = ({ value, currentUser }) => {
  const inputsData = [
    { name: "eventDate", text: "Date" },
    { name: "eventTime", text: "Horaires" },
    { name: "eventName", text: "Nom de l'activité" },
    { name: "eventPlace", text: "Lieu de l'activité" },
    { name: "eventDescription", text: "Description" }
  ]
  
  const handleSubmit = () => {
    setTimeout(() => window.location.reload(), 1500)
  } 

  return (
    <form className={styles.form} method="POST" action='https://easywintraining-api.herokuapp.com/api/events' id="addForm">

      {inputsData.map(input => {
        return(
          <Input
            name={input.name}
            text={input.text}
            type={input.name !== "eventDescription" ? "text" : null}
            value={input.name === "eventDate" ? value : undefined}
          />
        )
      })}

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
      <input type="hidden" name="userId" readOnly value={currentUser._id}/>
      <button id="formSubmit" onClick={() => handleSubmit()}>Ajouter</button>
    </form>
  )
}

export default AddEvent