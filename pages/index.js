import Head from 'next/head'
import Footer from '../components/Footer'
import GameSection from '../components/GameSection'
import Navbar from '../components/Navbar'
import gamesData from '../gamesData'

export default function Home() {
  const Sections = []
  
  for (let game of gamesData) {
    Sections.push(
      <GameSection
        title={game.title}
        text={game.text}
        src={game.src}
       />
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Easywintraining games</title>
      </Head>

      <Navbar/>

      <h2>
        Nos activités !
      </h2>

      <main className="main">
        <div className="grid">
          <>
          {Sections}
          </>
        </div>
      </main>
      <Footer/>
    </div>
  )
}