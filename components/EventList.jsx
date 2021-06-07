import Image from "next/image";
import styles from "./modules/EventList.module.scss";

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
                <button
                  className={styles.btn}
                  onClick={() => handleDelete(event._id)}
                >
                  <span
                   className={styles.span}
                  >
                    X
                  </span>
                </button>
              )}
              <header className={styles.header}>
                <span className={styles.iconWrapper}>
                  <Image
                    src="/icons/header.svg"
                    alt="header icon"
                    width={28}
                    height={28}
                    layout="fixed"
                  />
                </span>
                <p
                  className={styles.eventParagraph}
                  style={{
                    color: `${event.color}`,
                    fontWeight: "700",
                    fontSize: "1.08rem",
                  }}
                >
                  {event.name}
                </p>
              </header>
              <div>
                <span className={styles.iconWrapper}>
                  <Image
                    src="/icons/place-2.svg"
                    alt="place icon"
                    width={32}
                    height={32}
                    layout="fixed"
                  />
                </span>
                <p className={styles.eventParagraph}>{event.place}</p>
              </div>
              <div>
                <span className={styles.iconWrapper}>
                  <Image
                    src="/icons/time-2.svg"
                    alt="time icon"
                    width={28}
                    height={28}
                    layout="fixed"
                  />
                </span>
                <p className={styles.eventParagraph}>{event.time}</p>
              </div>
              <div>
                <span className={styles.iconWrapper}>
                  <Image
                    src="/icons/description-2.svg"
                    alt="description icon"
                    width={27}
                    height={27}
                    layout="fixed"
                  />
                </span>
                <p
                  className={styles.eventParagraph}
                  style={{
                    border: "none",
                  }}
                >
                  {event.description}
                </p>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default EventList;
