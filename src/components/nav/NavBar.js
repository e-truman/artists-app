import React from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/discover">Discover</Link> 
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/entries">Past Entries</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/insights">Insights</Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                            localStorage.removeItem("honey_customer")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}