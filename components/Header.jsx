import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/timetable">
            <a>Calendrier</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header