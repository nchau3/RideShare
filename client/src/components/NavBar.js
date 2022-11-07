import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import '../styles/component-styles/navbar.scss';

export default function NavBar(props) {
  return (
    <nav>
      <h1 className="logo">
        <NavLink to="/" className="nav-link center">
          <div>RoundTrip</div>
          <div className="logo-image"><i class="fa-solid fa-car-side"></i></div>
        </NavLink>
      </h1>
      <ul>
        {!props.user ? 
        <>
          <li className="register-bar">
            <NavLink to="/login" className="nav-link"><button>LOGIN</button></NavLink>
            <NavLink to="/register" className="nav-link"><button>REGISTER</button></NavLink> 
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
            <NavLink to="/profile" className="nav-link" activeClassName="selected">MY PROFILE</NavLink>
          </li>
          <li>
            <NavLink to="/trips" className="nav-link" activeClassName="selected">MY TRIPS</NavLink>
          </li>
        </>
        }
        <li>
          <NavLink to="/rides" className="nav-link" activeClassName="selected">SEARCH RIDES</NavLink>
        </li>
      </ul>
    </nav>
  );
}