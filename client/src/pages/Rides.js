import React, { useState } from "react";
import axios from "axios";
//import './styles/navbar.scss';

import RideList from "../components/RideList";

export default function Rides() {

  const [rides, setRides] = useState([]);

  function fetchRides() {
    axios.get("/api/rides")
    .then(response => {
      console.log("response.data", response.data)
        setRides(response.data)
      });
  }

  return (
    <>
      <h1>Rides!</h1>
      <header>
        <button onClick={fetchRides}>Display Rides!</button>
      </header>
      <RideList rides={rides}/>
    </>
  );
}