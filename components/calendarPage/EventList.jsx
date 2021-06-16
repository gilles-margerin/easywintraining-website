import { useState, useEffect } from "react";
import styles from "./EventList.module.scss";
import EventLiItem from "./EventLiItem";

const EventList = ({ events, currentUser, dateConversion, value, session }) => {
  const [editMode, setEditMode] = useState({
    isEdit: false,
    eventId: 0,
    e: null,
  });

  const editableElements = editMode?.e
    ? Array.from(editMode.e.target.closest("li").children).filter(
        (element) => element.lastChild.tagName === "P"
      )
    : [];

  useEffect(() => {
    const validateBtn = document.querySelector(
      `#validateBtn${editMode.eventId}`
    );

    if (!editMode.isEdit) {
      if (validateBtn) validateBtn.style.display = "none";

      editableElements.forEach((elem) => (elem.contentEditable = false));
    } else if (editMode.isEdit) {
      validateBtn.style.display = "initial";
      editableElements.forEach((elem) => (elem.contentEditable = true));
    }
  }, [editMode]);

  const checkEmpty = (data) => {
    return data.find(({ date }) => date === dateConversion(value));
  };

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

  const handleValidate = async (eventId, __, elements = editableElements) => {
    const data = {
      user: currentUser._id,
      name: editableElements[0].textContent,
      place: editableElements[1].textContent,
      time: editableElements[2].textContent,
      description: editableElements[3].textContent,
    };

    const reqOptions = {
      method: "PUT",
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
            <EventLiItem
              event={event}
              session={session}
              styles={styles}
              currentUser={currentUser}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleValidate={handleValidate}
            />
          );
        }
      })}
    </ul>
  );
};

export default EventList;
