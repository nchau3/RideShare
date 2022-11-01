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
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/register">REGISTER</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="/rides">RIDES</NavLink>
        </li>
        <li>
          <NavLink to="/trips">TRIPS</NavLink>
        </li>
      </ul>
    </nav>
  );
}