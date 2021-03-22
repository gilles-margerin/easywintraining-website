import Head from "next/head";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "../components/modules/Calendar.module.scss";
import 'react-calendar/dist/Calendar.css';

export default function CalendarWrapper() {
  const [value, setValue] = useState(new Date());

  return (
    <>
    <Head>
        <title>Easywintraining games</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Mulish&family=Philosopher:wght@700&display=swap" 
          rel="stylesheet"
        /> 
      </Head>
      
      <div className={styles.calendarWrapper}>
        <Calendar
          onClickDay={setValue}
          value={value}
          locale='fr-FR'
        />
        
        <p>
          {value.toLocaleDateString('fr', {
            month: 'long',
            year: 'numeric',
            weekday: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </>
  );
}
