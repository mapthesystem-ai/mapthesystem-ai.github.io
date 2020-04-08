import React from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import "../style/app.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Header extends React.Component {
  state = {
    dropDownIsOpen: false,
  }

  dropDownToggle = () =>
    this.setState({ dropDownIsOpen: !this.state.dropDownIsOpen })

  render() {
    return (
      <nav  className="navigate">
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
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    )
  }
}

export default Header
