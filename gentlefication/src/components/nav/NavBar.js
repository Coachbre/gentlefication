import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../images/logo.png";



//Layout for app navigation bar

export const NavBar = () => {

    const history = useHistory();
    const handleLogout = () => {
        sessionStorage.clear();
        history.push("/login")
        //handleLogout() clears session storage and redirects to login page
    }
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
                        COMMUNITY EVENTS
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/Organizations">
                        LOCAL RESOURCES
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/Council">
                        CITY COUNCIL
                    </Link>
                </li>

                <li className="log-out">
                    <button onClick={handleLogout}>
                        LOG OUT
                    </button>
                </li>
            </ul>

        </nav>

    )
}