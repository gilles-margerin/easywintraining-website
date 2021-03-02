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
       />
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Easywintraining games</title>
      </Head>

      <Navbar/>
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