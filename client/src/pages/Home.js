import React from "react";
import { NavLink } from "react-router-dom";

//import './styles/navbar.scss';

export default function Home() {
  return (
    
    <div className="page-container">
      <h1> Welcome to RoundTrip</h1>
      <h2> • Travel to your destination </h2>
      <h2> • Connecting you to available rides </h2>
      <h2> • Cashless payment method </h2>
      <h2> • Environmentally-friendly </h2>
      <button>
        <NavLink to="/rides" className="nav-link" activeClassName="selected"> BOOK A TRIP NOW </NavLink>
      </button>
    </div>
  );
}