import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

/**
 * Displays the list of towns, accepts the input from user and passes it to backend
 * @param {*} props 
 * @returns 
 */
const TownDropdown = (props) => {


  return (
    <UncontrolledDropdown>
        <DropdownToggle caret>
          Town
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Pasir Ris</DropdownItem>
          <DropdownItem >Bishan</DropdownItem>
          <DropdownItem>Pioneer</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
  );
    
}

export default TownDropdown
