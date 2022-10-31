import React, { useState } from "react";
import axios from "axios";
import User from "./components/User";
import Ride from "./components/Ride";

export default function Application() {
  const [state, setState] = useState({
    users: [],
    rides: [],
  });

  function fetchData() {
    Promise.all([axios.get("/api/users"), axios.get("/api/rides")]).then(
      (all) => {
        setState((prev) => ({
          ...prev,
          users: all[0].data,
          rides: all[1].data,
        }));
      }
    );
  }

  const users = state.users.map((user) => {
    return (
      <User
        key={user.id}
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
      />
    );
  });

  const rides = state.rides.map((ride) => {
    return (
      <Ride
        key={ride.id}
        first_name={ride.first_name}
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
      <h1>Click the button!</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {users}
      {rides}
    </main>
  );
}
