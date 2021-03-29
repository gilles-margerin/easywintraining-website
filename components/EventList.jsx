const EventList = ({ dbEvents, dateConversion, value }) => {
  return (
    <ul>
      {dbEvents.map((event) => {
        if (event.date === dateConversion(value)) {
          return (
            <li
              key={event.name}
              style={{
                boxShadow: `2px 3px 2px 2px ${event.color}`,
                borderRadius: "6px",
                marginBottom: "20px",
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
