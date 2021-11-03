// import { useState } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onSelectOption(event.target.value);
    }
    // removed preset css 
    //"dropdown" +
    const classes =  props.className;
  return (
    <div className={classes}>
      <div className={"dropdown__control"+props.className}>
        <label>{props.label}</label>
        <select value={props.default} onChange={dropdownChangeHandler}>
          <option value="" disabled selected hidden>Pick</option>
          {props.options.map((item) => (
            <option value={item}>{item.toString()}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;