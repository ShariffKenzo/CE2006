import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
