import Image from "next/image"
import styles from "./modules/EventList.module.scss"

const EventList = ({ events, currentUser, dateConversion, value, session }) => {
  const checkEmpty = data => {
    return data.find( ({date}) => date === dateConversion(value))
  }

  const handleDelete = async (eventId) => {
    const reqOptions = {
      method: 'DELETE'
    }

    try {
      await fetch(`https://easywintraining-api.herokuapp.com/api/events/${eventId}`, reqOptions)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  } 

  return (
    <ul>
      {!checkEmpty(events) && 
        <p
          className={styles.paragraph}
          style={{
            textAlign: "center",
            fontFamily: "inherit",
            margin: "30% auto",
            fontSize: "1.6rem",
            display: "initial",
          }}
        >
          Pas d'activités
        </p>
      }
      {events.map((event) => {
        if (event.date === dateConversion(value)) {
          return (
            <li
              id={event._id}
              key={event.name}
              style={{
                border: `2px solid ${event.color}`,
                borderRadius: "2px",
                marginBottom: "10px",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              {(session && currentUser?.isAdmin) && 
                <button
                  style={{
                    all: "unset",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    cursor: "pointer"
                  }}
                  onClick={() => handleDelete(event._id)}
                ><span
                  style={{
                    background: "red",
                    color: "#fff",
                    width: "100%",
                    display: "inline-block",
                    padding: "0.5rem"
                  }}
                >X</span></button>
              }
              <header>
                <span 
                  className={styles.iconWrapper}>
                  <Image
                    src="/icons/header.svg"
                    alt="header icon"
                    width={32}
                    height={32}
                    layout="fixed"
                  />
                </span>
                <p
                  className={styles.eventParagraph}
                >{event.name}</p>
              </header>
              <div
                style={{
                  borderTop: `1px solid ${event.color}`,
                  borderBottom: `1px solid ${event.color}`
                }}
              >
                <span 
                  className={styles.iconWrapper}>
                  <Image
                    src="/icons/place-2.svg"
                    alt="place icon"
                    width={34}
                    height={34}
                    layout="fixed"
                  />
                </span>
                <p
                  className={styles.eventParagraph}
                >{event.place}</p>
              </div>
              <div style={{
                borderBottom: `1px solid ${event.color}`
              }}>
              <span
                className={styles.iconWrapper}>
                <Image
                  src="/icons/time-2.svg"
                  alt="time icon"
                  width={32}
                  height={32}
                  layout="fixed"
                />
              </span>
                <p
                  className={styles.eventParagraph}
                >{event.time}</p>
              </div>
              <div>
                <span
                  className={styles.iconWrapper}>
                  <Image
                    src="/icons/description-2.svg"
                    alt="description icon"
                    width={34}
                    height={34}
                    layout="fixed"
                  />
                </span>
                <p
                  className={styles.eventParagraph}
                >{event.description}</p>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default EventList;
