import { useState } from 'react'

const EventList = ({ dbEvents, dateConversion, value }) => {  
  const checkEmpty = data => {
    console.log(data.find( ({date}) => date === value))
  }
  checkEmpty(dbEvents)
 

  return (
    <ul>
      {dbEvents.map((event) => {
        if (event.date === dateConversion(value)) {
          return (
            <li
              key={event.name}
              style={{
                border: `2px solid ${event.color}`,
                //boxShadow: `0px 0px 2px 2px ${event.color}`,
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
