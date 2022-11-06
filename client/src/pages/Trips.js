import React, { useEffect, useState } from "react";
import axios from "axios";

import TripList from "../components/Triplist";
//import './styles/navbar.scss';

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    axios.get(`/api/trips/${user_id}`)
    .then(response => {
      setTrips(response.data);
    })
  }, [user_id]);

  //placeholder for trip details dropdown
  function dropdown(id) {
    console.log("dropdown");
  }

  function clickAll() {
    console.log("Clicked ALL!!!!!!!!");
    axios.get(`/api/trips/${user_id}`)
    .then(response => {
      setTrips(response.data);
    })
  }

  function filterTrips(is_completed) {
    axios.get(`/api/trips/${user_id}`, {
      params: {
        is_completed: is_completed
      }
    })
    .then(response => {
      setTrips(response.data);
    })
  }

  return (
    <div className="page-container">
        <div className="listings-container">
          <h1>My Trips</h1>
          <button onClick={clickAll}>All</button>
          <button onClick={() => filterTrips(false)}>Upcoming</button>
          <button onClick={() => filterTrips(true)}>Completed</button>
          <TripList trips={trips} onClick={dropdown}/>
      {trips.length === 0 &&
        <h1>No trips booked!</h1>
      }
      </div>
    </div>
  );
}