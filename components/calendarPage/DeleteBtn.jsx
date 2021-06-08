const DeleteBtn = ({ styles, handleDelete, event}) => {
  return (
    <button className={styles.btn} onClick={() => handleDelete(event._id)}>
      <span className={styles.span}>X</span>
    </button>
  );
};

export default DeleteBtn
