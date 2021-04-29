import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../images/logo.png";

export const NavBar = () => {
  return (
      <>
    
    <nav>


        <li className="">
          <Link className="" to="/">
          <img className="logo" src={Logo} alt="logo" />
          </Link>
        </li>

        <li className="">
          <Link className="" to="/events">EVENTS</Link>
        </li>

        <li className="">
          <Link className="" to="/organizations">ORGANIZATIONS</Link>
        </li>

        <li className="">
          <Link className="" to="/council">CITY COUNCIL</Link>
        </li>

        <li className="">
            LOG OUT
        </li>

 
    </nav>
 
    </>
    
  )
}