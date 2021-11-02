import React from "react";
import Dropdown from "../global/Dropdown";
import "./PricingTrendsFilters.css";

/**
 * Displays the list of filters for Price Esitmator
 * @param {*} props
 * @returns street dropdown component
 */
const PricingTrendsFilters = (props) => {
  const townDB = ["Pasir Ris", "Bishan", "Pioneer"];
  const streetDB = ["Street 11", "Street 41", "Street 12"];
  const flatTypeDB = [
    "1 Room",
    "2 Room",
    "3 Room",
    "5 Room",
    "5 Room",
    "Maisonette",
  ];

  const town1SelectHandler = (selectedTown1) => {
    console.log(selectedTown1);
  };
  const town2SelectHandler = (selectedTown2) => {
    console.log(selectedTown2);
  };
  const town3SelectHandler = (selectedTown3) => {
    console.log(selectedTown3);
  };

  return (
    <div>
      <Dropdown
        className="town1"
        label="Town 1"
        options={townDB}
        onSelectOption={town1SelectHandler}
      />
      <Dropdown
        className="town1"
        label="Town 2"
        options={townDB}
        onSelectOption={town2SelectHandler}
      />
      <Dropdown
        className="town3"
        label="Town 3"
        options={townDB}
        onSelectOption={town3SelectHandler}
      />
    </div>
  );
};

export default PricingTrendsFilters
