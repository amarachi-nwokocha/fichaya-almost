
 import React, { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
NavbarText}
  from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href='../logo.png'></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >DASHBOARD</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >CUSTOMERS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >ASSOSIATES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >REQUESTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >SCHEDULE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >PAYMENT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >SETTINGS</NavLink>
            </NavItem>
                  <NavbarText><FontAwesomeIcon icon="coffee" /></NavbarText>    
            </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;