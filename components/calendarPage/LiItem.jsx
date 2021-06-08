import styles from './LiItem.module.scss'

const LiItem = ({key, background}) => {
  return (
    <li
      key={key}
      style={{
        background: background
      }}
      className={styles.liItem}
    >
    </li>
  )
}

export default LiItem