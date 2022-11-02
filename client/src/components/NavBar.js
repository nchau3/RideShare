import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import '../styles/component-styles/navbar.scss';

export default function NavBar() {
  return (
    <nav>
      <h1 className="logo">RIDESHARE</h1>
      <ul>
        <li>
          <NavLink to="/register" className="nav-item" activeClassName="selected">REGISTER</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-item" activeClassName="selected">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="/rides" className="nav-item" activeClassName="selected">RIDES</NavLink>
        </li>
        <li>
          <NavLink to="/trips" className="nav-item" activeClassName="selected">TRIPS</NavLink>
        </li>
      </ul>
    </nav>
  );
}