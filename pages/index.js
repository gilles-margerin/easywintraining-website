import Head from "next/head";
import Footer from "../components/Footer";
import GameSection from "../components/GameSection";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside"
import gamesData from "../gamesData";
import {useState, useRef, useEffect} from 'react';

export default function Home() {
  const [active, setActive] = useState('')
  const prevClassRef = useRef('')

  useEffect(() => {
    prevClassRef.current = active
  });

  const toggleActive = (e) => {
    const target = e.target.closest('section')

    prevClassRef.current === target.id ?
    setActive('') : setActive(target.id)
  }

  return (
    <div className="container">
      <Head>
        <title>Easywintraining Games</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Mulish&family=Philosopher:wght@700&display=swap" 
          rel="stylesheet"
        /> 
      </Head>

      <Navbar />
      <main className="main">
        <div className="grid">
          <>
            <h2>
              Nos activités
            </h2>
            {gamesData.map((game) => (
              <GameSection
              title={game.title}
              text={game.text}
              src={game.src}
              key={game.key}
              id={game.key}
              active={active}
              toggleActive={toggleActive}
              />
            ))}
          </>
        </div>
      </main>
      <Aside />
      <Footer />
    </div>
  );
}
