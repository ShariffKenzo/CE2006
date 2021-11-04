import { useState, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onSelectOption(event.target.value);
    }
    const classes =  props.className;
    const [selected, setSelected] = useState(props.value);
    useEffect(() => {
      setSelected(props.value)
    },[props.value]);
  return (
    <div className={classes}>
      <div className={"dropdown__control"+props.className}>
        <label>{props.label}</label>
        <select value={props.value} onChange={dropdownChangeHandler}>
          <option value="" disabled selected hidden>Pick</option>
          {props.options.map(item =>
            <option key={item.toString()} value={item}>{item.toString()}</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;