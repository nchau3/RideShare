import React from "react";
import { Link } from "react-router-dom";

import '../styles/component-styles/home.scss';

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1> Welcome</h1>
      </div>
      <div className="form-center">
        <div className="form-container welcome">
          <ul>
            <li> • Travel to your destination </li>
            <li> • Connecting you to available rides </li>
            <li> • Cashless payment method </li>
            <li> • Environmentally-friendly </li>
          </ul>
          <Link to="/rides" className="nav-link">
            <button>START HERE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}