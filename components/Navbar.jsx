import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a id="homelink">
          <Image
            src="/home.svg"
            alt="homepage icon"
            width={30}
            height={30}
            layout="fixed"
          />
          <span>Easywintraining</span>
          <span>Games</span>
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
              src="/facebook.svg"
              alt="facebook icon"
              width={32}
              height={32}
              layout="fixed"
            />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <Image
                src="/contact.svg"
                alt="contact icon"
                width={30}
                height={30}
                layout="fixed"
              />
              <span>Contact</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/timetable">
            <a>
              <Image
                src="/calendar.svg"
                alt="calendar icon"
                width={30}
                height={30}
                layout="fixed"
              />
              <span>Calendrier</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
