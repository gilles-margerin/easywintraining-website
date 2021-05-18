import Image from "next/image"
import styles from "./modules/PartnerCard.module.scss"

const PartnerCard = ({ name, description, list, other, src, width, height, webpage, address}) => {
  return (
    <div id={name} className={styles.container}>
      <a href={webpage}>
        <img
          src={src}
          width={width}
          height={height}
          
        />
      </a>
      <div>
        <p className={styles.paragraph}>{description}</p>
        {list.length > 0 && (
          <ul className={styles.listContainer}>
            {list.map((item, i) => (
              <li className={styles.liItem} key={i}>{item}</li>
            ))}
          </ul>
        )}
        {other && <p className={styles.paragraph}>{other}</p>}
        <span className={styles.iconWrapper}>
          <Image
            src="/icons/place-2.svg"
            alt="place icon"
            width={34}
            height={40}
            layout="fixed"
            
          />
          <address>{address}</address>
        </span>
      </div>
    </div>
  );
};

export default PartnerCard
