import Head from "next/head";
import dbConnect from "../utils/dbConnect";
import dateConversion from "../utils/dateConversion";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Calendar from "react-calendar";
import styles from "../components/calendarPage/Calendar.module.scss";
import Event from "../models/Event";
import User from "../models/User";
import AddEvent from "../components/calendarPage/AddEvent";
import EventList from "../components/calendarPage/EventList";
import LiItem from "../components/calendarPage/LiItem";
import CalendarSideInfo from "../components/calendarPage/CalendarSideInfo";
import LogButton from "../components/calendarPage/LogButton";

function CalendarWrapper(props) {
  const [session, loading] = useSession();
  const [value, setValue] = useState(new Date());
  const dbUsers = JSON.parse(props.users);
  const [events, setEvents] = useState(JSON.parse(props.events));
  const currentUser = dbUsers.find(
    ({ email }) => email === session?.user?.email
  );

  useEffect(async () => {
    if (document.readyState === "complete") {
      if (session && currentUser === undefined) {
        const data = {
          name: session.user.name,
          email: session.user.email,
          providerId: session.user.id,
        };
        const reqOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        await fetch(
          `https://easywintraining-api.herokuapp.com/api/users`,
          reqOptions
        );
        window.location.reload();
      }
    }
  }, [session]);

  function tileContent(props) {
    const dayEvents = events.filter(
      (event) => event.date === dateConversion(props.date)
    );

    if (dayEvents.length < 1) return;

    return (
      <ul className={styles.ulReset}>
        {dayEvents.map((event) => {
          return <LiItem key={event.name} background={event.color} />;
        })}
      </ul>
    );
  }

  return (
    <>
      <Head>
        <title>Easywintraining Games - Calendrier</title>
        <meta name="description" content="Calendrier des activités et évènements de l'association, pour prévoir vos moments ludiques!"/>
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
              currentUser={currentUser}
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
            <LogButton styles={styles} signFunc={signIn} text={"Login"} />
          )}

          {session && currentUser?.isAdmin === true && (
            <>
              <LogButton styles={styles} signFunc={signOut} text={"Logout"} />
              <AddEvent
                value={dateConversion(value)}
                currentUser={currentUser}
              />
            </>
          )}

          {session && currentUser?.isAdmin === false && (
            <>
              <span className={styles.spanInfo}>
                Vous n'êtes pas membre de l'équipe
              </span>
              <LogButton styles={styles} signFunc={signOut} text={"Logout"} />
            </>
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
