import Head from "next/head";
import partnersData from "../data/partnersData";
import styles from "../components/partnersPage/Partners.module.scss";
import PartnerCard from "../components/partnersPage/PartnerCard";

export default function Partners() {
  return (
    <>
      <Head>
        <title>Easywintraining Games - Partenaires</title>
        <meta name="descrition" content="Nos partenaires locaux, n'hésitez pas à leur rendre visite!"/>
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
              key={partner.name}
              name={partner.name}
              description={partner.description}
              list={partner.list}
              other={partner.other}
              src={partner.picture}
              width={partner.width}
              height={partner.height}
              webpage={partner.contact.webpage}
              address={partner.contact.location}
              city={partner.contact.city}
              map={partner.contact.map}
              alt={partner.alt}
              style={partner.style ? partner.style : ""}
            />
          )}
        </main>
      </div>
    </>
  );
}
