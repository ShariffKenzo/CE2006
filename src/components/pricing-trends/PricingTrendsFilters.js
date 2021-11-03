import React from "react";
import Dropdown from "../global/Dropdown";
import "./PricingTrendsFilters.css";
import { useState } from "react";

/**
 * Displays the list of filters for Price Esitmator
 * @param {*} props
 * @returns street dropdown component
 */

const PricingTrendsFilters = (props) => {

  const [town1, setTown1] = useState(null);
  const [town2, setTown2] = useState(null);
  const [town3, setTown3] = useState(null);

  const townDB = ["Pasir Ris", "Bishan", "Pioneer"];

  const town1SelectHandler = (selectedTown1) => {
    setTown1(selectedTown1);
    props.onSelectOptions([selectedTown1, town2, town3]);
  };
  const town2SelectHandler = (selectedTown2) => {
    setTown2(selectedTown2);
    //console.log("selected Town " + selectedTown2);
    props.onSelectOptions([town1, selectedTown2, town3]);
  };
  const town3SelectHandler = (selectedTown3) => {
    setTown3(selectedTown3);
    props.onSelectOptions([town1, town2, selectedTown3]);
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
