import React from "react";
import Dropdown from "../global/Dropdown";
import "./PriceEstimatorFilters.css";

import * as gov from "../../logic/govData.js";


/**
 * Displays the list of filters for Price Esitmator
 * @param {*} props
 * @returns street dropdown component
 */


const PriceEstimatorFilters = async (props) => {
  
 
    const townDB = ["Pasir Ris", "Bishan", "Pioneer"];
    //const streetDB = ["Street 11", "Street 41", "Street 12"];
    var streetDB = await gov.getStreets(props);
    const flatTypeDB = [
      "1 Room",
      "2 Room",
      "3 Room",
      "5 Room",
      "5 Room",
      "Maisonette",
    ];
    const blockDB = ["blk 1","blk 2","blk 3"];
  
    const town1SelectHandler = (selectedTown1) => {
      console.log(selectedTown1);
    };
    const town2SelectHandler = (selectedTown2) => {
      console.log(selectedTown2);
    };
    const town3SelectHandler = (selectedTown3) => {
      console.log(selectedTown3);
    };
    const town4SelectHandler = (selectedTown4) => {
      console.log(selectedTown4); 
    };
  
    return (
      <div>
       
        <Dropdown
          className="Townest"
          label="Town"
          options={townDB}
          onSelectOption={town1SelectHandler}
        />
        <Dropdown
          className="Streetest"
          label="Street"
          options={streetDB}
          onSelectOption={town2SelectHandler}
        />
        <Dropdown
          className="Typreest"
          label="Flat Type"
          options={flatTypeDB}
          onSelectOption={town3SelectHandler}
        />
       
  <Dropdown 
          className="Blkest"
          label="Block"
          options={blockDB}
          onSelectOption={town4SelectHandler}
        />
  
      </div>


  );
};

export default PriceEstimatorFilters;
