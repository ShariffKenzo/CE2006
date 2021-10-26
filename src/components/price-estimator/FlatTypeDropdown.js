import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
/**
 * Allows the user to choose a flat from the different types available
 * @returns flat type dropdown component
 */
const FlatTypeDropdown = () => {


    return (
        <UncontrolledDropdown>
        <DropdownToggle caret>
          Flat Type
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >1 ROOM</DropdownItem>
          <DropdownItem >2 ROOM</DropdownItem>
          <DropdownItem>3 ROOM</DropdownItem>
          <DropdownItem>4 ROOM</DropdownItem>
          <DropdownItem>5 ROOM</DropdownItem>
          <DropdownItem>Maisonette</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
}

export default FlatTypeDropdown
