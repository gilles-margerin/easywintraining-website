import styles from "./Input.module.scss";

const Input = ({ name, text, type, value, handleChange, isEdit }) => {
  return (
    <div className={styles.formDiv}>
      <label htmlFor={name}>{text}</label>
      {name === "type" && (
        <select
          className="formInput"
          name="type"
          id="type"
          value={value}
          required
          disabled={isEdit ? true : false}
          onChange={(e) => handleChange(e)}
        >
          <option>--- Choisir une activité ---</option>
          <option>Animations ludiques</option>
          <option>Evènements</option>
          <option>Jeux d'ambiance</option>
          <option>Jeux de plateau / stratégie</option>
          <option>Jeux de rôles</option>
          <option>Jeux traditionnels</option>
        </select>
      )}
      {name === "description" && (
        <textarea
        className="formInput"
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={(e) => handleChange(e)}
      />
      )}
      {name !== "type" && name !== "description" && (
        <input
          className="formInput"
          id={name}
          name={name}
          type={type}
          required
          value={value}
          disabled={isEdit && name === "date" ? true : false}
          onChange={(e) => handleChange(e)}
        />
      )}
    </div>
  );
};

export default Input;
