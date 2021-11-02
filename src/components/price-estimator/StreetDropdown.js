import React from "react";
import Dropdown from "../global/Dropdown";
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
/**
 * Displays the list of streets from backend, accepts input from user and passes it to backend
 * @param {*} props
 * @returns street dropdown component
 */
const StreetDropdown = (props) => {
  const streetDB = ["Street 11", "Street 41", "Street 12"];
  const streetSelectHandler = (selectedStreet) => {
    console.log(selectedStreet);
  };
  return (
      <Dropdown label="Street" options={streetDB} onSelectOption={streetSelectHandler} />
  );

  // return (
  //   <UncontrolledDropdown>
  //     <DropdownToggle caret>Street</DropdownToggle>
  //     <DropdownMenu>
  //       <DropdownItem>Street 11</DropdownItem>
  //       <DropdownItem>Street 41</DropdownItem>
  //       <DropdownItem>Street 12</DropdownItem>
  //     </DropdownMenu>
  //   </UncontrolledDropdown>
  // );
};

export default StreetDropdown;
