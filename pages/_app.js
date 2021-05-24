import Layout from "../components/Layout";
import "../styles/globals.scss";
import { Provider } from "next-auth/client"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (document !== 'undefined' || document !== null) {
      document.documentElement.lang = "FR-fr"
    }
  })

  return (
   <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
   </Provider>
  );
}

export default MyApp;
