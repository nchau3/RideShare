import React, { useState } from "react";
import axios from "axios";

import RideList from "../components/RideList";
import SearchRides from "../components/SearchRides";

export default function Rides() {

  const [rides, setRides] = useState([]);

  function searchRides(params) {
    axios.get("/api/rides/search", { params: params })
    .then(response => {
        setRides(response.data)
      });
  }

  return (
    <div className="page-container">
      {rides.length > 0 ? 
        <div className="listings-container">
          <h1>Search results:</h1>
          <RideList rides={rides} />
        </div>
        :
        <SearchRides onSubmit={searchRides} />
      }
    </div>
  );
}