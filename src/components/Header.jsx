import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "../style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  state = {
    dropDownIsOpen: false,
  };

  dropDownToggle = () =>
    this.setState({ dropDownIsOpen: !this.state.dropDownIsOpen });

  render() {
    return (
      <nav>
        <Navbar expand="md">
          <NavbarBrand href="/">Map the System: AI</NavbarBrand>
          <NavbarToggler onClick={this.dropDownToggle} />
          <Collapse isOpen={this.state.dropDownIsOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Bibliography/">Bibliography</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Report/">Report</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="/#">
                    drop #1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/#">
                    drop #2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default Header;
