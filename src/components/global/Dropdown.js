import "./Dropdown.css";

/**
 * Resusable dropdown component
 * @param {function} onSelectOption function to be called once user selects an option
 * @param {string} label - dropdown label
 * @param {string} value - value chosen by user
 * @param {string[]} options - array of options for user to choose from
 * @returns {JSX.Element} dropdown component
 * 
 */
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