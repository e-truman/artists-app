
import { Link } from "react-router-dom"
import "./NavBar.css"

import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';



export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    // return (
//         <ul className="navbar">
//             {/* <li className="navbar__item active">
//                 <Link className="navbar__link" to="/discover">Discover</Link> 
//             </li> */}
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/entries">Past Entries</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/">Home</Link>
//             </li>
//             {/* <li className="navbar__item">
//                 <Link className="navbar__link" to="/insights">Insights</Link>
//             </li> */}
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="#"
//                 onClick={
//                     () => {
//                             localStorage.removeItem("artist_login")
//                         }
//                     }>
//                     Logout
//                 </Link>
//             </li>
//         </ul>
//     )
// }


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">The Artist's App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/entries">Past Entries</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;













