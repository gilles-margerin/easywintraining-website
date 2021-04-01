const EventList = ({ dbEvents, dateConversion, value }) => {  
  const checkEmpty = data => {
    return data.find( ({date}) => date === dateConversion(value))
  }
  console.log(checkEmpty(dbEvents) !== undefined)
 

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
                flexDirection: "column"
              }}
            >
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
