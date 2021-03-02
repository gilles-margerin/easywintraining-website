import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <h2>Easywintraining Games</h2>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Image
                src="/home.svg"
                alt="homepage icon"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </li>
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
              width={30}
              height={30}
            />
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
              />
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
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
