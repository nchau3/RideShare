import React, { useEffect, useState } from "react";
import axios from "axios";

import TripList from "../components/Triplist";
import NoResults from "../components/NoResults";

import "../styles/component-styles/trip-container.scss";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [refresh, setRefresh] = useState();
  const user_id = localStorage.getItem("user_id");

  function toggle(value) {
    return !value;
  }

  useEffect(() => {
    axios.get(`/api/trips/${user_id}`)
    .then(response => {
      setTrips(response.data);
    })
  }, [user_id, refresh]);

  //placeholder for trip details dropdown
  function dropdown() {
    console.log("dropdown");
  }

  function filterTrips(is_completed) {
    axios.get(`/api/trips/${user_id}`, {
      params: { is_completed }
    })
    .then(response => {
      setTrips(response.data);
    })
  }

  function cancelTrip(trip_id) {
    axios.delete(`api/trips/${trip_id}`)
    .then(() => {
      setRefresh(toggle);
    })
  }

  return (
    <div className="page-container">
      <div className="listings-container">
        <div className="page-header">
          <h1>My Trips</h1>
          <div>
            <button onClick={() => setRefresh(toggle)}>ALL</button>
            <button onClick={() => filterTrips(false)}>UPCOMING</button>
            <button onClick={() => filterTrips(true)}>COMPLETED</button>
          </div>
        </div>
        {trips.length > 1 ?
        <TripList trips={trips} onClick={dropdown} cancelTrip={cancelTrip}/>
        :
        <NoResults message="Your booked rides will show up here." />
      }
      </div>
    </div>
  );
}