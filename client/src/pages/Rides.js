import React, { useState } from "react";
import axios from "axios";
//import './styles/navbar.scss';

import RideList from "../components/RideList";
import SingleRide from "../components/SingleRide";

export default function Rides() {

  const [ride, setRide] = useState({});
  const [rides, setRides] = useState([]);

  function fetchRides() {
    axios.get("/api/rides")
    .then(response => {
      console.log("response.data", response.data)
        setRides(response.data)
      });
  }

  function showRide(id) {
    for (let ride of rides) {
      if (ride.id === id) {
        setRide(ride);
      }
    };
  }

  return (
    <div className="page-container">
      <h1>Rides!</h1>
      <header>
        <button onClick={fetchRides}>Display Rides!</button>
      </header>
      <div className="listings-container">
        <RideList rides={rides} onClick={showRide}/>
      </div>
    </div>
  );
}