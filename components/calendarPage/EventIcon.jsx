import Image from "next/legacy/image"

const EventIcon = ({ src, alt, width, height, content, styles }) => {
  return (
    <div>
      <span className={styles.iconWrapper}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="fixed"
        />
      </span>
      <p className={styles.eventParagraph}>{content}</p>
    </div>
  );
};

export default EventIcon;
