import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

/**
 * Allows users to choose towns to compare
 * @param {*} props 
 * @returns town dropdown component
 */
const Town1Dropdown = (props) => {


  return (
    <UncontrolledDropdown>
        <DropdownToggle caret>
          Town 1
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Pasir Ris</DropdownItem>
          <DropdownItem >Bishan</DropdownItem>
          <DropdownItem>Pioneer</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
  );
    
}

export default Town1Dropdown