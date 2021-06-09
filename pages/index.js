import Head from "next/head";
import GameSection from "../components/indexPage/GameSection";
import Aside from "../components/indexPage/Aside";
import InfoText from "../components/indexPage/InfoText"
import Main from "../components/indexPage/Main";
import gamesData from "../data/gamesData";
import { useState, useRef, useEffect } from "react";

export async function getStaticProps() {
  const apiKey = process.env.GOOGLEMAP_API_KEY;

  return {
    props: {
      apiKey,
    },
  };
}

export default function Home({ apiKey }) {
  const [active, setActive] = useState("");
  const prevClassRef = useRef("");

  useEffect(() => {
    prevClassRef.current = active;
  });

  const toggleActive = (e) => {
    const target = e.target.closest("section");

    prevClassRef.current === target.id ? setActive("") : setActive(target.id);
  };

  return (
    <>
      <Head>
        <title>Easywintraining Games - Accueil</title>
        <meta name="description" content="Easywintraining Games est une association de jeux et d'animations ludiques à Perpignan.  Venez vous amuser avec nous et notre vaste choix d'activités!"/>
        <meta property="og:title" content="Easywintraining Games - Accueil" />
        <meta property="og:description" content="Easywintraining Games est une association de jeux et d'animations ludiques à Perpignan.  Venez vous amuser avec nous et notre vaste choix d'activités!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/P56vGhW5/Screenshot-20210531-120051.png" />
        <meta property="og:url" content="https://www.easywintraining-games.fr" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&family=Philosopher:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <Main>
          <h2>Nos activités</h2>
          {gamesData.map((game) => (
            <GameSection
              title={game.title}
              text={game.text}
              src={game.src}
              key={game.key}
              id={game.key}
              alt={game.alt}
              active={active}
              toggleActive={toggleActive}
            />
          ))}
        </Main>

        <Aside apiKey={apiKey} />
      </div>
      <InfoText />
    </>
  );
}
