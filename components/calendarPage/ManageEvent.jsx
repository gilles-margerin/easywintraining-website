import { useState } from "react";
import styles from "./ManageEvent.module.scss";
import Input from "./Input";

const ManageEvent = ({ value, currentUser, event, isEdit }) => {
  const inputsData = [
    { name: "date", text: "Date" },
    { name: "time", text: "Horaires" },
    { name: "name", text: "Nom de l'activité" },
    { name: "place", text: "Lieu de l'activité" },
    { name: "description", text: "Description" },
    { name: "type", text: "Type d'activité" },
  ];

  const [inputText, setInputText] = useState();

  if (isEdit && !inputText) {
    return setInputText({
      ...event,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit ? `https://easywintraining-api.herokuapp.com/api/events/${event._id}` : "https://easywintraining-api.herokuapp.com/api/events"
    const reqOptions = {
      method: isEdit ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {}
    }

    switch (reqOptions.method) {
      case "PUT": {
        reqOptions.body = JSON.stringify({
          name: inputText.name,
          place: inputText.place,
          time: inputText.time,
          description: inputText.description,
          user: currentUser._id
        })

        try {
          const response = await fetch(url, reqOptions)
          if (response.ok) window.location.reload()
        } catch (err) {
          console.log("Error updating event", err)
        }
        break
      }
      case "POST": {
        reqOptions.body = JSON.stringify({
          ...inputText,
          date: value,
          user: currentUser._id
        })

        try {
          const response = await fetch(url, reqOptions)
          if (response.ok) window.location.reload()

        } catch (err) {
          console.log("Error creating event", err)
        }
        break
      }

      default: {
        alert("Request method error")
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputText({
      ...inputText,
      [name]: value,
    });
  };

  return (
    <form className={styles.form}>
      {inputsData.map((input, i) => {
        return (
          <Input
            key={i}
            name={input.name}
            text={input.text}
            type={"text"}
            value={input.name === "date" ? value : undefined}
            handleChange={handleChange}
            isEdit={isEdit}
            event={event}
          />
        );
      })}
      <button id="formSubmit" onClick={(e) => handleSubmit(e)}>
        {isEdit ? "Modifer" : "Ajouter"}
      </button>
    </form>
  );
};

export default ManageEvent;
