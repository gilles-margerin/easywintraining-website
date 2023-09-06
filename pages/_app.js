import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (document !== 'undefined' || document !== null) {
      document.documentElement.lang = "FR-fr"
    }
  })

  return (
   <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
   </SessionProvider>
  );
}

export default MyApp;
