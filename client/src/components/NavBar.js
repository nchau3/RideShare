import React from "react";
import './styles/navbar.scss';

export default function NavBar(props) {
  return (
    <nav>
      <h1 class="logo">RIDESHARE</h1>
      <ul>
        <li>REGISTER</li>
        <li>LOGIN</li>
        <li>SEARCH RIDES</li>
        <li>MY TRIPS</li>
      </ul>
    </nav>
  );
}