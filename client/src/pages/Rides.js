import React, { useState } from "react";
import axios from "axios";

import RideList from "../components/RideList";
import SearchRides from "../components/SearchRides";
import SingleRide from "../components/SingleRide";
import CreateRide from "../components/CreateRide";

export default function Rides() {
  const [ride, setRide] = useState();
  const [rides, setRides] = useState([]);
  const user_id = localStorage.getItem("user_id");

  function searchRides(searchParams) {
    axios.get("/api/rides/search", { params: searchParams }).then((response) => {
      setRides(response.data);
    });
  }

  function createRide(params) {
    axios
      .post("/api/rides/:driver_id", { params: params })
      .then((response) => {});
  }

  function displayRide(ride_id) {
    axios.get(`api/rides/${ride_id}`).then((response) => {
      let result = response.data[0];
      result.car_image = `https://cdn-01.imagin.studio/getImage?customer=cashaunjijicompany&make=${response.data[0].car_make}&modelFamily=${response.data[0].car_model}`;
      setRide(result);
    });
  }

  function bookTrip(ride_id, user_id) {
    axios.post(`api/trips/${ride_id}/${user_id}`).then((response) => {
      if (response.status === 201) {
        console.log("booked!");
      }
    });
  }

  function goBackToRides() {
    setRide(null);
  }

  function clearSearch() {
    setRides([]);
  }

  return (
    <div className="page-container">
      {ride ? (
        <section>
          <SingleRide
            key={ride.id}
            id={ride.id}
            user_id={user_id}
            first_name={ride.first_name}
            last_name={ride.last_name}
            avatar={ride.avatar}
            car_model={ride.car_model}
            car_make={ride.car_make}
            car_color={ride.car_color}
            pickup={ride.pickup}
            dropoff={ride.dropoff}
            departure={ride.departure_date_time}
            allow_pets={ride.allow_pets}
            allow_oversize={ride.allow_oversize}
            allow_skis={ride.allow_skis}
            allow_bikes={ride.allow_bikes}
            cost={ride.cost_per_seat}
            rating={ride.rating}
            trip_count={ride.trip_count}
            description={ride.description}
            onSubmit={bookTrip}
            goBack={goBackToRides}
            car_image={ride.car_image}
            remaining_seats={ride.remaining_seats}
          />
          <button onClick={() => bookTrip(ride.id, user_id)}>Book Trip</button>
          <button id="go-back" onClick={() => goBackToRides()}>Go Back</button>
        </section>
      ) : rides.length > 0 ? (
        <div className="listings-container">
          <h1>Search results:</h1>
          <RideList
            rides={rides}
            onClick={displayRide}
            clearSearch={clearSearch}
          />
        </div>
      ) : (
        <SearchRides onSubmit={searchRides} />
      )}
    </div>
  );
}
