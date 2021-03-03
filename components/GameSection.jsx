import Image from 'next/image'
import styles from './GameSection.module.scss'

const GameSection = (props) => {
  return (
    <section className={styles.card}>
      <header>
        <Image
          src={props.src}
          width={365}
          height={345}
        />
      </header>
      <div>
        <h3>
            {props.title}
          </h3>
        <p>
          {props.text}
        </p>
      </div>
    </section>
  )
}

export default GameSection