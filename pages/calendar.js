import Head from "next/head";
import dbConnect from "../utils/dbConnect"
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../components/modules/Calendar.module.scss";
import EventDate from "../models/EventDate";
import EventList from "../components/EventList";

function CalendarWrapper(props) {
  const [value, setValue] = useState(new Date());
  const dbEvents = JSON.parse(props.events)

  const dateConversion = (date) => {
    return date.toLocaleDateString("fr", {
      month: "long",
      year: "numeric",
      weekday: "long",
      day: "numeric",
    });
  };

  function tileContent(props) {
    return dbEvents.map((event) => {
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
        
        <EventList 
          dbEvents={dbEvents}
          dateConversion={dateConversion}
          value={value}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  await dbConnect()

  const events = await EventDate.find({})
 
  return { 
    props: {
      events: JSON.stringify(events),
    }
  }
}

export default CalendarWrapper