import Image from 'next/image'
import styles from './GameSection.module.scss'

const GameSection = (props) => {
  return (
    <section className={styles.card}>
      <header>
        <h3>
          {props.title}
        </h3>
        <Image
          src="/easywin-poster.jpg"
          width={20}
          height={20}
        />
      </header>
      <p>
        {props.text}
      </p>
    </section>
  )
}

export default GameSection