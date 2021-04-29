import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../images/logo.png";

//Layout for app navigation bar

export const NavBar = () => {
    return (
        <>

            <nav>

<ul>
                <li className="navLogo">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="logo" />
                    </Link>
                </li>

                <li>
                    <Link to="/events">
                        EVENTS
                    </Link>
                </li>

                <li>
                    <Link to="/organizations">
                        ORGANIZATIONS
                    </Link>
                </li>

                <li>
                    <Link to="/council">
                        CITY COUNCIL
                    </Link>
                </li>

                <li className="log-out">
                    LOG OUT
                </li>
</ul>

            </nav>

        </>

    )
}