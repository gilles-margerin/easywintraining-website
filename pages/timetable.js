import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Easywintraining games</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Mulish&family=Philosopher:wght@700&display=swap" 
          rel="stylesheet"
        /> 
      </Head>

      <Navbar />
      <main className="main">
        <div className="grid"></div>
      </main>
      <Footer />
    </div>
  );
}
