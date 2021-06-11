const AdminBtn = ({ id, styles, handleClick, event, text}) => {
  return (
    <button className={styles.btn} onClick={(e) => handleClick(event._id, e)}>
      <span className={styles.span + ' ' + styles[text]} id={id}>{text}</span>
    </button>
  );
};

export default AdminBtn
