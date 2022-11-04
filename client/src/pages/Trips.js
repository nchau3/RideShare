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

  return (
    <div className="page-container">
      {trips.length > 0 ? 
        <div className="listings-container">
          <h1>Search results:</h1>
          <TripList trips={trips} />
        </div>
        :
        <h1>No trips booked!</h1>
      }
    </div>
  );
}