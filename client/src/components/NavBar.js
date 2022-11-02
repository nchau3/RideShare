import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import './styles/navbar.scss';

export default function NavBar() {
  return (
    <nav>
      <h1 className="logo">RIDESHARE</h1>
      <ul>
        <li>
          <NavLink to="/register" activeClassName="selected">REGISTER</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="/rides" activeClassName="selected">RIDES</NavLink>
        </li>
        <li>
          <NavLink to="/trips" activeClassName="selected">TRIPS</NavLink>
        </li>
      </ul>
    </nav>
  );
}