import Image from 'next/image'

const EventHeader = ({ styles, event }) => {
  return (
    <header className={styles.header}>
      <span className={styles.iconWrapper}>
        <Image
          src="/icons/header.svg"
          alt="header icon"
          width={28}
          height={28}
          layout="fixed"
        />
      </span>
      <p
        className={styles.eventParagraph}
        style={{
          color: `${event.color}`,
          fontWeight: "700",
          fontSize: "1.08rem",
        }}
      >
        {event.name}
      </p>
    </header>
  );
};

export default EventHeader
