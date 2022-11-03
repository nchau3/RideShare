import React, { useState } from "react";
import axios from "axios";

import RideList from "../components/RideList";
import SearchRides from "../components/SearchRides";
import SingleRide from "../components/SingleRide";

export default function Rides() {
  const [ride, setRide] = useState();
  const [rides, setRides] = useState([]);

  function searchRides(params) {
    axios.get("/api/rides/search", { params: params })
    .then(response => {
        setRides(response.data)
      });
  }

  function displayRide(ride_id) {
    axios.get(`api/rides/${ride_id}`)
    .then(response => {
      console.log(response.data[0])
      setRide(response.data[0]);
    })
  }

  return (
    <div className="page-container">
      {ride ? 
        <SingleRide
        key={ride.id}
        first_name={ride.first_name}
        last_name={ride.last_name}
        avatar={ride.avatar}
        car_model={ride.car_model}
        car_make={ride.car_make}
        car_color={ride.car_color}
        pickup={ride.pickup}
        dropoff={ride.dropoff}
        departure={ride.departure_date_time}
        cost={ride.cost_per_seat}
        />
        :
        rides.length > 0 ? 
          <div className="listings-container">
            <h1>Search results:</h1>
            <RideList rides={rides} onClick={displayRide}/>
          </div>
          :
          <SearchRides onSubmit={searchRides} />
      }

    </div>
  );
}