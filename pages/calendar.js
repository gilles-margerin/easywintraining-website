import Head from "next/head";
import dbConnect from "../utils/dbConnect";
import dateConversion from "../utils/dateConversion";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../components/modules/Calendar.module.scss";
import Event from "../models/Event";
import User from "../models/User";
import AddEvent from "../components/AddEvent";
import EventList from "../components/EventList";
import CalendarSideInfo from "../components/CalendarSideInfo";

function CalendarWrapper(props) {
  const [session, loading] = useSession();
  const [value, setValue] = useState(new Date());
  const dbEvents = JSON.parse(props.events);
  const dbUsers = JSON.parse(props.users);

  function tileContent(props) {
    const dayEvents = dbEvents.filter(
      (event) => event.date === dateConversion(props.date)
    );

    if (dayEvents.length < 1) return;

    return (
      <ul className={styles.ulReset}>
        {dayEvents.map((event) => {
          return (
            <li
              key={event.name}
              style={{ background: event.color }}
              className={styles.liItem}
            ></li>
          );
        })}
      </ul>
    );
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

      <main className={styles.wrapper}>
        <div className={styles.calendarWrapper}>

          <Calendar
            className={styles.reactCalendar__main}
            onClickDay={setValue}
            value={value}
            locale="fr-FR"
            tileContent={tileContent}
            tileClassName={styles.reactCalendar__tile}
          />
          <div className={styles.eventInfoWrapper}>
            <h2>{dateConversion(value)}</h2>
            <EventList
              dbEvents={dbEvents}
              dateConversion={dateConversion}
              value={value}
            />
          </div>

          <aside className={styles.aside}>

            {!session && (
              <>
              <div className={styles.sessionWrapper}>
                <div >
                  <p>S'identifier (animateurs)</p>
                  <button onClick={() => signIn()}>Connection</button>
                </div>
              </div>
              <CalendarSideInfo/>
              </>
            )}
            {session &&
              dbUsers.find(({ email }) => email === session.user.email) && (
                <div className={styles.sessionWrapper}>
                  <AddEvent />
                  <div style={{
                    position: "absolute",
                    top: "100px",
                    right: "15px",
                    background: "#fafafa",
                    padding: "1rem",
                    borderRadius: "6px",
                    boxShadow: "2px 2px 5px 1px rgb(35,29,0)"
                  }}>
                    <p>Bienvenue {session.user.name}</p>
                    <button onClick={() => signOut()}>Déconnection</button>
                  </div>
                </div>
              )}
            {session &&
              !dbUsers.find(({ email }) => email === session.user.email) && (
                <>
                <div className={styles.sessionWrapper}>
                  <div >
                    <p>
                      {session.user.name}, vous n'êtes pas membre de l'équipe
                    </p>
                    <button onClick={() => signOut()}>Sign out</button>
                  </div>
                </div>
                <CalendarSideInfo/>
                </>
              )}
          </aside>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  await dbConnect();

  const events = await Event.find({});
  const users = await User.find({});

  return {
    props: {
      events: JSON.stringify(events),
      users: JSON.stringify(users),
    },
  };
}

export default CalendarWrapper;
