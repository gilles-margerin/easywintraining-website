import iconsData from "../../data/iconsData";
import styles from "./EventList.module.scss";
import DeleteBtn from "./DeleteBtn";
import EventHeader from "./EventHeader";
import EventIcon from "./EventIcon"

const EventList = ({ events, currentUser, dateConversion, value, session }) => {
  const checkEmpty = (data) => {
    return data.find(({ date }) => date === dateConversion(value));
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
                <DeleteBtn
                  styles={styles}
                  event={event}
                  handleDelete={handleDelete}
                />
              )}
              <EventHeader styles={styles} event={event} />
              {iconsData.map((icon, i) => {
                const eventType = icon.alt.slice(0, -5)
                const eventFilter = Object.fromEntries(
                  Object.entries(event).filter(key => key[0] === eventType)
                )

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
