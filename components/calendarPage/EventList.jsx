import { useState, useEffect } from "react";
import iconsData from "../../data/iconsData";
import styles from "./EventList.module.scss";
import EventHeader from "./EventHeader";
import EventIcon from "./EventIcon";
import AdminBtn from "./AdminBtn";

const EventList = ({ events, currentUser, dateConversion, value, session }) => {
  const [editMode, setEditMode] = useState({ isEdit: false, eventId: 0, e: null });
  const editableElements = editMode?.e ? Array.from(editMode.e.target.closest("li").children).filter(element => element.lastChild.tagName === "P") : [];

  useEffect(() => {
    const validateBtn = document.querySelector(`#validateBtn${editMode.eventId}`) 
    
    if (!editMode.isEdit) {
      if (validateBtn) validateBtn.style.display = 'none'

      editableElements.forEach(elem => elem.contentEditable = false)
    } else if (editMode.isEdit) {
      validateBtn.style.display = 'initial'
      editableElements.forEach(elem => elem.contentEditable = true)
    }
  }, [editMode])


  const checkEmpty = (data) => {
    return data.find(({ date }) => date === dateConversion(value));
  };

  const handleValidate = async (eventId, __, elements = editableElements) => {
    const data = {
      user: currentUser._id,
      name: editableElements[0].textContent,
      place: editableElements[1].textContent,
      time: editableElements[2].textContent,
      description: editableElements[3].textContent
    }

    const reqOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    
    try {
      await fetch(
        `https://easywintraining-api.herokuapp.com/api/events/${eventId}`,
        reqOptions
      );
      //window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = (eventId, e) => {
    setEditMode({ isEdit: !editMode.isEdit, eventId: eventId, e: e }); 
  };

  const handleDelete = async (eventId) => {
    const data = {
      userId: currentUser._id,
    };
    const reqOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      await fetch(
        `https://easywintraining-api.herokuapp.com/api/events/${eventId}`,
        reqOptions
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul>
      {!checkEmpty(events) && (
        <p className={styles.paragraph}>Pas d'activités</p>
      )}
      {events.map((event) => {
        if (event.date === dateConversion(value)) {
          return (
            <li
              className={styles.liItem}
              id={event._id}
              key={event.name}
              style={{
                border: `1px outset ${event.color}`,
              }}
            >
              <span className={styles.eventType}>{event.type}</span>
              {session && currentUser?.isAdmin && (
                <div id="adminWrapper" className={styles.adminWrapper}>
                  <AdminBtn
                    id={`validateBtn${event._id}`}
                    styles={styles}
                    event={event}
                    handleClick={handleValidate}
                    text="Valider"
                   />
                  <AdminBtn
                    id={`editBtn${event._id}`}
                    styles={styles}
                    event={event}
                    handleClick={handleEdit}
                    text="Editer"
                  />
                  <AdminBtn
                    id={`deleteBtn${event._id}`}
                    styles={styles}
                    event={event}
                    handleClick={handleDelete}
                    text="Effacer"
                  />
                </div>
              )}
              <EventHeader styles={styles} event={event} />
              {iconsData.map((icon, i) => {
                const eventType = icon.alt.slice(0, -5);
                const eventFilter = Object.fromEntries(
                  Object.entries(event).filter((key) => key[0] === eventType)
                );

                return (
                  <EventIcon
                    key={i}
                    index={i}
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    content={eventFilter[eventType]}
                    styles={styles}
                  />
                );
              })}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default EventList;
