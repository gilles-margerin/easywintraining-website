import Head from "next/head";
import GameSection from "../components/GameSection";
import Aside from "../components/Aside";
import Main from "../components/Main";
import gamesData from "../gamesData";
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
        <title>Easywintraining Games</title>
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
              active={active}
              toggleActive={toggleActive}
            />
          ))}
        </Main>

        <Aside apiKey={apiKey} />
      </div>
    </>
  );
}
