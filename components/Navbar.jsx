import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a id="homelink">
          <Image
            src="/icons/ewt-logo.jpg"
            alt="homepage icon"
            width={30}
            height={30}
            layout="fixed"
          />
          <span>Easywintraining Games</span>
        </a>
      </Link>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/Easywintraining-Games-1929362253988650/?ref=page_internal"
            target="_blank"
            rel="noopener 
            noreferrer"
          >
            <Image
              src="/icons/facebook.svg"
              alt="facebook icon"
              width={30}
              height={30}
              layout="fixed"
            />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <Link href="/timetable">
            <a>
              <Image
                src="/icons/calendar.svg"
                alt="calendar icon"
                width={28}
                height={28}
                layout="fixed"
              />
              <span>Calendrier</span>
            </a>
          </Link>
        </li>
        <li>
        <Link href="/partners">
            <a>
              <Image
                src="/icons/partner-4.svg"
                alt="calendar icon"
                width={32}
                height={32}
                layout="fixed"
              />
              <span>Partenaires</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
