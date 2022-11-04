import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import '../styles/component-styles/navbar.scss';

export default function NavBar(props) {
  return (
    <nav>
      <h1 className="logo">
        <NavLink to="/" className="nav-item">RIDESHARE</NavLink>
      </h1>
      <ul>
        {!props.user ? 
        <>
          <li className="register-bar">
            <button><NavLink to="/login" className="nav-item">LOGIN</NavLink></button>
            <button><NavLink to="/register" className="nav-item">REGISTER</NavLink></button> 
          </li>
        </>
        :
        <>
          <li className="register-bar">
            <button onClick={() => props.logout()}>LOGOUT</button> 
          </li>
        </>
        }
        {props.user &&
        <>
          <li>
            <NavLink to="/profile" className="nav-item" activeClassName="selected">MY PROFILE</NavLink>
          </li>
          <li>
            <NavLink to="/trips" className="nav-item" activeClassName="selected">MY TRIPS</NavLink>
          </li>
        </>
        }
        <li>
          <NavLink to="/rides" className="nav-item" activeClassName="selected">SEARCH RIDES</NavLink>
        </li>
      </ul>
    </nav>
  );
}