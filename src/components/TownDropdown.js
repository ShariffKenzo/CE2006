import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
