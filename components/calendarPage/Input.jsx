import styles from "./Input.module.scss"

const Input = ({ name, text, type, value }) => {
  return (
    <div className={styles.formDiv}>
      <label htmlFor={name}>{text}</label>
      <input className="formInput" id={name} name={name} type={type} required value={value}/>
    </div>
  );
};

export default Input