const Select = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select name={props.name} id={props.id}>
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
};

export default Select;
