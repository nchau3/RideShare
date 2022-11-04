import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import '../styles/component-styles/navbar.scss';

export default function NavBar(props) {
  return (
    <nav>
      <h1 className="logo">RIDESHARE</h1>
      <ul>
        {!props.user && 
        <>
          <li className="register-bar">
            <NavLink to="/login" className="nav-item">LOGIN</NavLink>
            <NavLink to="/register" className="nav-item">REGISTER</NavLink>
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
      {props.user &&
        <footer className="nav-item">
          Logged in as: {props.user.first_name} {props.user.last_name}
        </footer>
      }
    </nav>
  );
}