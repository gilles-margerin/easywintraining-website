import Image from "next/image"
import checkAdmin from "../utils/checkAdmin"
import styles from "./modules/EventList.module.scss"

const EventList = ({ dbEvents, dbUsers, dateConversion, value, session }) => {  
  const checkEmpty = data => {
    return data.find( ({date}) => date === dateConversion(value))
  }

  return (
    <ul>
      {!checkEmpty(dbEvents) && 
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
      {dbEvents.map((event) => {
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
              {(session && checkAdmin(dbUsers, session)) && 
                <button
                  style={{
                    all: "unset",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    position: "absolute",
                    top: "0",
                    right: "0"
                  }}
                ><a 
                  href={`https://easywintraining-api.herokuapp.com/api/delevent/${event._id}`}
                  style={{
                    background: "red",
                    color: "#fff",
                    width: "100%",
                    display: "inline-block",
                    padding: "0.5rem"
                  }}
                >X</a></button>
              }
              <header>
                <h4>
                  <Image
                    src="/icons/header.svg"
                    alt="header icon"
                    width={32}
                    height={32}
                    layout="fixed"
                  />
                </h4>
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
                <h4>
                  <Image
                    src="/icons/place-2.svg"
                    alt="place icon"
                    width={34}
                    height={34}
                    layout="fixed"
                  />
                </h4>
                <p
                  className={styles.eventParagraph}
                >{event.place}</p>
              </div>
              <div style={{
                borderBottom: `1px solid ${event.color}`
              }}>
              <h4>
                <Image
                  src="/icons/time-2.svg"
                  alt="time icon"
                  width={32}
                  height={32}
                  layout="fixed"
                />
              </h4>
                <p
                  className={styles.eventParagraph}
                >{event.time}</p>
              </div>
              <div>
                <h4>
                  <Image
                    src="/icons/description-2.svg"
                    alt="description icon"
                    width={34}
                    height={34}
                    layout="fixed"
                  />
                </h4>
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
