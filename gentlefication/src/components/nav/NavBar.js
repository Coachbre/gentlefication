import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>

      <ul>

        <li className="">
          <Link className="" to="/">HOME</Link>
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

      </ul>
    </nav>
  )
}