import { useEffect } from "react";
import styles from "./EventList.module.scss";
import EventLiItem from "./EventLiItem";

const EventList = ({ handleEdit, handleDelete, handleValidate, events, currentUser, dateConversion, value, session, editMode }) => {
  useEffect(() => {
    const liElements = document ? document.querySelectorAll(`.${styles.liItem}`) : []
    liElements.forEach((elem,i )=> {
      const timer = 100 + ((i + 1) * 200)

      elem.style.transition = `all ease-in-out ${timer}ms`
      elem.style.opacity = '1'
      elem.style.transform = 'translateY(0)'
    })

    return () => liElements.forEach(elem => {
      elem.style.opacity = '0'
      elem.style.transform = 'translateY(20px)'
    })
  })

  const checkEmpty = (data) => {
    return data.find(({ date }) => date === dateConversion(value));
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
              editMode={editMode}
              key={event._id}
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
