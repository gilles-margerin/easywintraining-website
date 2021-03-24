import Head from "next/head";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../components/modules/Calendar.module.scss";

export default function CalendarWrapper() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState([
    {
      date: "lundi 8 mars 2021",
      eventList: [
        {
          name: "event red",
          description: "blablalbalblbalblaba",
          type: "rpg",
          color: "red",
        },
        {
          name: "event gray",
          description: "blablalbalblbalblaba",
          type: "rpg",
          color: "gray",
        },
      ],
    },
    {
      date: "mercredi 10 mars 2021",
      eventList: [
        {
          name: "event blue",
          description: "blablalbalblbalblaba",
          type: "rpg",
          color: "blue",
        },
      ],
    },
    {
      date: "jeudi 11 mars 2021",
      eventList: [
        {
          name: "event green",
          description: "blablalbalblbalblaba",
          type: "rpg",
          color: "green",
        },
      ],
    },
    {
      date: "samedi 13 mars 2021",
      eventList: [
        {
          name: "event black",
          description: "blablalbalblbalblaba",
          type: "rpg",
          color: "black",
        },
      ],
    },
  ]);

  const dateConversion = (date) => {
    return date.toLocaleDateString("fr", {
      month: "long",
      year: "numeric",
      weekday: "long",
      day: "numeric",
    });
  };

  function tileContent(props) {
    return events.map((event) => {
      if (
        event.eventList.length > 0 &&
        event.date === dateConversion(props.date)
      ) {
        return (
          <ul key={event.date} className={styles.ulReset}>
            {event.eventList.map((event) => (
              <li
                key={event.name}
                style={{ background: event.color }}
                className={styles.liItem}
              ></li>
            ))}
          </ul>
        );
      }
    });
  }

  return (
    <>
      <Head>
        <title>Easywintraining games</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&family=Philosopher:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.calendarWrapper}>
        <Calendar
          className={styles.reactCalendar__main}
          onClickDay={setValue}
          value={value}
          locale="fr-FR"
          tileContent={tileContent}
          tileClassName={styles.reactCalendar__tile}
        />

        <p>{dateConversion(value)}</p>
        {events.map((event) => {
          if (event.date === dateConversion(value)) {
            return (
              <ul>
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
      </div>
    </>
  );
}
