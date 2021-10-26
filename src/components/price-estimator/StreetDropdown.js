import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
/**
 * Displays the list of streets from backend, accepts input from user and passes it to backend
 * @param {*} props 
 * @returns street dropdown component
 */
const StreetDropdown = (props) => {
  


    return (
        <UncontrolledDropdown>
        <DropdownToggle caret>
          Street
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Street 11</DropdownItem>
          <DropdownItem >Street 41</DropdownItem>
          <DropdownItem>Street 12</DropdownItem>
          
        </DropdownMenu>
      </UncontrolledDropdown>
    )
}

export default StreetDropdown
