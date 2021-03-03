import Head from "next/head";
import Footer from "../components/Footer";
import GameSection from "../components/GameSection";
import Navbar from "../components/Navbar";
import gamesData from "../gamesData";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Easywintraining games</title>
      </Head>

      <Navbar />

      <h2>Nos activités !</h2>

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
              />
            ))}
          </>
        </div>
      </main>
      <Footer />
    </div>
  );
}
