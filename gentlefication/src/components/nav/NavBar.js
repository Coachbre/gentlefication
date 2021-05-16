import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./NavBar.css";


import Logo from "../../images/logo.png";
import React from "react";
import { Link, useHistory } from "react-router-dom";




//Layout for app navigation bar

export const NavBar = () => {

    const history = useHistory();
    const handleLogout = () => {
        sessionStorage.clear();
        history.push("/")
        //handleLogout() clears session storage and redirects to login page
    }
    return (
        <nav className="navBar">

            <ul>
                <li className="navLogo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Button onClick={handleLogout}>
                        LOG OUT
                    </Button>
                </li>

                <li className="nav-item">
                    <Link to="/Council">
                        CITY COUNCIL
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/Organizations">
                        LOCAL RESOURCES
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/Events">
                        COMMUNITY EVENTS
                    </Link>
                </li>


            </ul>

        </nav>

    )
}