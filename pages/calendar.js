import Head from "next/head";
import dbConnect from "../utils/dbConnect";
import dateConversion from "../utils/dateConversion";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Calendar from "react-calendar";
import styles from "../components/modules/Calendar.module.scss";
import Event from "../models/Event";
import User from "../models/User";
import AddEvent from "../components/AddEvent";
import EventList from "../components/EventList";
import CalendarSideInfo from "../components/CalendarSideInfo";
import LogButton from "../components/LogButton"

function CalendarWrapper(props) {
  const [session, loading] = useSession();
  const [value, setValue] = useState(new Date());
  const dbUsers = JSON.parse(props.users);
  const [events, setEvents] = useState(JSON.parse(props.events))
  const currentUser = dbUsers.find(( { email }) => email === session?.user?.email)

  console.log(session)

  function tileContent(props) {
    const dayEvents = events.filter(
      (event) => event.date === dateConversion(props.date)
    );

    if (dayEvents.length < 1) return;

    return (
      <ul className={styles.ulReset}>
        {dayEvents.map((event) => {
          return (
            <li
              key={event.name}
              style={{
                background: event.color,
                boxShadow: `0 0 1px 1px black`,
              }}
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
              dbUsers={dbUsers}
              events={events}
              setEvents={setEvents}
              dateConversion={dateConversion}
              value={value}
              session={session}
            />
          </div>

          <aside className={styles.aside}>
            <CalendarSideInfo />
          </aside>

          {!session && (
            <LogButton
              styles={styles}
              signFunc={signIn}
              text={'Login'}
            />
          )}

          {session && currentUser.isAdmin === true && (
            <>
              <LogButton
                styles={styles}
                signFunc={signOut}
                text={'Logout'}
              />
              <AddEvent 
                value={dateConversion(value)}
              />
            </>
          )}

          {session && currentUser.isAdmin === false && (
            <LogButton
              styles={styles}
              signFunc={signOut}
              text={'Logout'}
            />
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
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
