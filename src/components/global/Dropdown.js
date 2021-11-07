import "./Dropdown.css";

const Dropdown = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onSelectOption(event.target.value);
    }
  return (
    <div className={props.className + "mydropdown"}>
        <label className="dropdown__label">{props.label}</label>
        <select className="dropdown__select" value={props.value} onChange={dropdownChangeHandler}>
          <option value="" disabled selected hidden>Pick</option>
          {props.options.map(item =>
            <option key={item.toString()} value={item}>{item.toString()}</option>
          )}
        </select>
    </div>
  );
};

export default Dropdown;