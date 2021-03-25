const EventList = ({ dbEvents, dateConversion, value }) => {
  return(
    <ul>
      {dbEvents.map(event => {
        if (event.date === dateConversion(value)) {
          return (
            <li key ={event.name}>
            <p>{event.name}</p>
            <p>{event.description}</p>
          </li>
          )
        }
      })}
    </ul>
  )
};

export default EventList
