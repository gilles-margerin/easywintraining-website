import Image from "next/image"
import styles from "./modules/PartnerCard.module.scss"

const PartnerCard = ({ name, description, list, other, src, width, height, webpage}) => {
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
          <ul>
            {list.map((item, i) => (
              <li className={styles.liItem} key={i}>{item}</li>
            ))}
          </ul>
        )}
        {list.length <= 0 && <hr/>}
        {other && <p className={styles.paragraph}>{other}</p>}
      </div>
    </div>
  );
};

export default PartnerCard
