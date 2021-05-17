import Head from "next/head";
import partnersData from "../partnersData";
import styles from "../components/modules/Partners.module.scss";
import PartnerCard from "../components/PartnerCard"

export default function Partners() {
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

      <div className={styles.container}>
        <main className={styles.partnersContainer}>
          {partnersData.map((partner) => 
            <PartnerCard
              name={partner.name}
              description={partner.description}
              list={partner.list}
              other={partner.other}
              src={partner.picture}
              width={partner.width}
              height={partner.height}
              webpage={partner.contact.webpage}
            />
          )}
        </main>
      </div>
    </>
  );
}
