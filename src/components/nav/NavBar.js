import React from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"
import { VscBook, VscArchive, VscEdit, VscHome, VscSymbolColor, VscTrash, VscSignOut } from "react-icons/vsc";
export const NavBar = () => {
    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/discover">Discover</Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/entries">
                    <div className="icon">
                        <VscBook />
                        <div className="nav__text">
                            Past Entries
                        </div>
                    </div>
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">
                    <div className="icon">
                        <VscHome />
                        <div className="nav__text">HOME</div>
                    </div>
                </Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/insights">Insights</Link>
            </li> */}
            <li className="navbar__item">

                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("artist_login")
                        }
                    }>

                    <div className="icon">
                        <VscSignOut />
                        <div className="nav__text">LOGOUT</div>
                    </div>
                </Link>
            </li>
        </ul>
    )
}









