import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        Town
      </DropdownToggle>
      <DropdownMenu>
        <div onClick={toggle}>Pasir ris</div>
        <div onClick={toggle}>Bishan</div>
        <div onClick={toggle}>Pioneer</div>
        <div onClick={toggle}>Serangoon</div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;

