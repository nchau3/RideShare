import React, { useState } from "react";
import axios from "axios";
//import './styles/navbar.scss';

import RideList from "../components/RideList";
import SingleRide from "../components/SingleRide";
import SearchRides from "../components/SearchRides";

export default function Rides() {

  const [ride, setRide] = useState({});
  const [rides, setRides] = useState([]);

  function searchRides(params) {
    axios.get(`/api/rides/${params}`)
    .then(response => {
        setRides(response.data)
      });
  }

  return (
    <div className="page-container">
      {rides.length > 0 ? 
        <div className="listings-container">
          <RideList rides={rides} />
        </div>
        :
        <SearchRides onClick={searchRides} />
      }
    </div>
  );
}