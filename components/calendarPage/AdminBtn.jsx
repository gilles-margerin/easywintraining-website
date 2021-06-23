const AdminBtn = ({ id, styles, handleClick, event, text}) => {
  return (
    <button className={styles.btn} onClick={() => handleClick(event)}>
      <span className={styles.span + ' ' + styles[text]} id={id}>{text === "Edition" ? text + " en cours..." : text}</span>
    </button>
  );
};

export default AdminBtn
