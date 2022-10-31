import React from "react";
import './styles/navbar.scss';

export default function NavBar(props) {
  return (
    <nav>
      <h1>RIDESHARE</h1>
      <ul>
        <li>Register</li>
        <li>Login</li>
        <li>Search Rides</li>
        <li>My Trips</li>
      </ul>
    </nav>
  );
}