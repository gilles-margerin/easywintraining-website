import styles from './MapMarker.module.scss'
import Image from "next/legacy/image"

const MapMarker = () => {
  return (
    <div className={styles.marker}>
      <Image
        src="/icons/ewt-logo.jpg"
        alt="licorn icon"
        width={30}
        height={30}
        layout="fixed"
      />
    </div>
  )
}

export default MapMarker