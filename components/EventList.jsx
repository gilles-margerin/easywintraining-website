import checkAdmin from "../utils/checkAdmin"

const EventList = ({ dbEvents, dbUsers, dateConversion, value, session }) => {  
  const checkEmpty = data => {
    return data.find( ({date}) => date === dateConversion(value))
  }

  return (
    <ul>
      {!checkEmpty(dbEvents) && 
        <p
          style={{
            textAlign: "center",
            fontFamily: "inherit",
            margin: "30% auto",
            fontSize: "1.6rem"
          }}
        >
          Pas d'activités aujourd'hui
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
                  href={`/api/events/${event._id}`}
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
                <h4>Activité:</h4>
                <p>{event.name}</p>
              </header>
              <div
                style={{
                  borderTop: `1px solid ${event.color}`,
                  borderBottom: `1px solid ${event.color}`
                }}
              >
                <h4>Lieu:</h4>
                <p>{event.place}</p>
              </div>
              <div style={{
                borderBottom: `1px solid ${event.color}`
              }}>
              <h4>Horaires:</h4>
                <p>{event.time}</p>
              </div>
              <div>
                <h4>Description:</h4>
                <p>{event.description}</p>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default EventList;
