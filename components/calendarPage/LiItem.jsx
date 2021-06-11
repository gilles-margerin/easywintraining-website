import styles from './LiItem.module.scss'

const LiItem = ({ background }) => {
  return (
    <li
      style={{
        background: background
      }}
      className={styles.liItem}
    >
    </li>
  )
}

export default LiItem