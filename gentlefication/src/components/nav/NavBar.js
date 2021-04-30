import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../images/logo.png";

//Layout for app navigation bar

export const NavBar = () => {
    return (
          <nav className="navBar">

                <ul>
                    <li className="nav-item">
                        <Link to="/">
                            <img className="navLogo" src={Logo} alt="logo" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Events">
                            EVENTS
                    </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Organizations">
                            ORGANIZATIONS
                    </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Council">
                            CITY COUNCIL
                    </Link>
                    </li>

                    <li className="log-out">
                        LOG OUT
                    </li>
                </ul>
     
            </nav>

    )
}