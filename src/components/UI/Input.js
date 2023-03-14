import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id} style={props.labelStyle}>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        style={props.inputStyle}
        defaultValue={props.defaultValue}
      ></input>
    </div>
  );
});

export default Input;
