import React from "react";
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
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

  const townSelectHandler = (selectedTown) => {
    console.log(selectedTown);
  };
  const streetSelectHandler = (selectedStreet) => {
    console.log(selectedStreet);
  };
  const flatTypeSelectHandler = (selectedFlatType) => {
    console.log(selectedFlatType);
  };

  const blockSelectHandler = (selectedBlock) => {
    console.log(selectedBlock);
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
      <Dropdown className="flat-type"
        label="Block"
        options={blockDB}
        onSelectOption={blockSelectHandler}
      />

    </div>
  );
};

export default PriceEstimatorFilters;
