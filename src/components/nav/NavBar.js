import { Link } from "react-router-dom"
import "./NavBar.css"
import { VscBook, VscHome, VscSignOut } from "react-icons/vsc";
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{color: "#6c757d"}} href="/">The Artist's Way App </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/"><VscHome /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/entries"><VscBook /></NavLink>
              </NavItem>
    
            </Nav>
            <Link  className="navbar__link" to="#" 
                    onClick={
                        () => {
                            localStorage.removeItem("artist_login")
                        }
                    }>

                         <VscSignOut /> 
                </Link>
          </Collapse>
        </Navbar>
      </div>
    );
  }

















//     return (
//         <ul className="navbar">
//             <li className="navbar__item active">
//                 <Link className="navbar__link" to="/discover">THE ARTIST'S WAY APP</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/entries">
//                     <div className="icon">
//                         <VscBook />
//                         <div className="nav__text">
//                             Past Entries
//                         </div>
//                     </div>
//                 </Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/">
//                     <div className="icon">
//                         <VscHome />
//                         <div className="nav__text">HOME</div>
//                     </div>
//                 </Link>
//             </li>
//             {/* <li className="navbar__item">
//                 <Link className="navbar__link" to="/insights">Insights</Link>
//             </li> */}
//             <li className="navbar__item">

//                 <Link className="navbar__link" to="#"
//                     onClick={
//                         () => {
//                             localStorage.removeItem("artist_login")
//                         }
//                     }>

//                     <div className="icon">
//                         <VscSignOut />
//                         <div className="nav__text">LOGOUT</div>
//                     </div>
//                 </Link>
//             </li>
//         </ul>
//     )
// }












  











