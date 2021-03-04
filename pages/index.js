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
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante tortor, elementum nec metus ac, feugiat tristique ex. Sed odio mauris, viverra lobortis arcu quis, rhoncus pharetra felis. Donec id consequat metus, ut laoreet neque. Donec sed fringilla dui, sed vestibulum risus. Mauris congue nunc at vestibulum rhoncus. Phasellus fermentum. 
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in vehicula ante, non aliquam sem. Nullam ipsum velit, accumsan non nibh at, facilisis pretium justo. Donec condimentum at ligula vitae porta. Nullam semper malesuada metus quis consectetur. Aenean facilisis libero et felis semper gravida quis at libero. Duis faucibus ut. 
      </p>
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
