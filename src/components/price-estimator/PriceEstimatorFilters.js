import React from "react";
import Dropdown from "../global/Dropdown";
import "./PriceEstimatorFilters.css";

/**
 * Displays the list of filters for Price Esitmator
 * @param {*} props
 * @returns street dropdown component
 */
const PriceEstimatorFilters = (props) => {
  const townDB = ["Pasir Ris", "Bishan", "Pioneer"];
  const streetDB = ["Street 11", "Street 41", "Street 12"];
  const flatTypeDB = ["1 Room", "2 Room", "3 Room", "5 Room", "5 Room", "Maisonette"];

  const townSelectHandler = (selectedStreet) => {
    console.log(selectedStreet);
  };
  const streetSelectHandler = (selectedStreet) => {
    console.log(selectedStreet);
  };
  const flatTypeSelectHandler = (selectedStreet) => {
    console.log(selectedStreet);
  };

  return (
    <div>
      <Dropdown className="town"
        label="Town"
        options={townDB}
        onSelectOption={townSelectHandler}
      />
      <Dropdown className="street"
        label="Street"
        options={streetDB}
        onSelectOption={streetSelectHandler}
      />
      <Dropdown className="flat-type"
        label="Flat Type"
        options={flatTypeDB}
        onSelectOption={flatTypeSelectHandler}
      />
    </div>
  );
};

export default PriceEstimatorFilters;
