import { forwardRef } from "react";
import styles from "./Select.module.css";

const Select = forwardRef((props, ref) => {
  return (
    <div className={styles.select}>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        ref={ref}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
      >
        {props.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.display}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default Select;
