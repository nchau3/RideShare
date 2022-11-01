import React, { useState } from "react";
import axios from "axios";

import './app.scss'

import NavBar from "./components/NavBar";
import Ride from "./components/Ride";

export default function Application() {
  const [state, setState] = useState({
    rides: []
  });

  function fetchData() {
    Promise.all([axios.get("/api/rides")]).then(
      (all) => {
        setState((prev) => ({
          ...prev,
          rides: all[0].data,
        }));
      }
    );
  }

  const rides = state.rides.map((ride) => {
    return (
      <Ride
        key={ride.id}
        first_name={ride.first_name}
        last_name={ride.last_name}
        car_model={ride.car_model}
        car_make={ride.car_make}
        car_color={ride.car_color}
        pickup={ride.pickup}
        dropoff={ride.dropoff}
        departure={ride.departure_date_time}
        cost={ride.cost_per_seat}
      />
    );
  });

  return (
    <main>
      <NavBar/>
      <section class="current-page">
        <header>
          <button onClick={fetchData}>Display Rides!</button>
        </header>
        <div class="rides-container">
          {rides}
        </div>
      </section>
    </main>
  );
}
