import Head from "next/head";
import Footer from "../components/Footer";
import GameSection from "../components/GameSection";
import Navbar from "../components/Navbar";
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
        <title>Easywintraining games</title>
      </Head>

      <Navbar />

      <h2>Bienvenue</h2>

      <h2>Nos activités</h2>

      <main className="main">
        <div className="grid">
          <>
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
      <Footer />
    </div>
  );
}
