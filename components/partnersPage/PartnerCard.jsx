import Image from "next/legacy/image";
import styles from "./PartnerCard.module.scss";

const PartnerCard = ({
  name,
  description,
  list,
  other,
  src,
  width,
  height,
  webpage,
  address,
  city,
  map,
  alt,
  style,
}) => {
  return (
    <div id={name} className={styles.container}>
      <a className={(styles.wrapper, styles.partnerLink)} href={webpage}>
        <img src={src} width={width} height={height} alt={alt} />
      </a>
      <div className={styles.wrapper}>
        <p style={style.name} className={styles.paragraph}>
          {description}
        </p>

        {list.length > 0 && (
          <ul className={styles.listContainer}>
            {list.map((item, i) => (
              <li className={styles.liItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <p style={style.other} className={styles.paragraph}>
          {other}
        </p>
        {address && (
          <span className={styles.iconWrapper}>
            <Image
              src="/icons/place-2.svg"
              alt="place icon"
              width={34}
              height={40}
              layout="fixed"
            />

            <address>
              <a
                className={styles.mapLink}
                href={map}
                target="_blank"
                rel="noopener 
                noreferrer"
              >
                <span>{address}</span>
                <span>{city}</span>
              </a>
            </address>
          </span>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
