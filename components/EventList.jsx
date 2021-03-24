const EventList = ({ dbEvents, dateConversion, value }) => {
  return (
    <>
    {dbEvents.map((event) => {
      if (event.date === dateConversion(value)) {
        return (
          <ul key={event.date}>
            {event.eventList.map((item) => (
              <li key={item.name}>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        );
      }
    })}
  </>
  )
};

export default EventList
