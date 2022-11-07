import React from "react";

//Components
import SingleRide from "./SingleRide";
import TripDetails from "./TripDetails";

export default function TripList(props) {

  const tripsForUser = props.trips.map((trip) => {
    const car_image = `https://cdn-01.imagin.studio/getImage?customer=cashaunjijicompany&make=${trip.car_make}&modelFamily=${trip.car_model}`;

    return (
      <article className="trip-container" key={trip.id}>
        <SingleRide
          key={trip.id}
          first_name={trip.first_name}
          last_name={trip.last_name}
          avatar={trip.avatar}
          car_model={trip.car_model}
          car_make={trip.car_make}
          car_color={trip.car_color}
          car_image={car_image}
          pickup={trip.pickup}
          dropoff={trip.dropoff}
          departure={trip.departure_date_time}
          description={trip.description}
          onClick={props.onClick}
          cost={trip.cost_per_seat}
          rating={trip.rating}
          trip_count={trip.trip_count}
          remaining_seats={trip.remaining_seats}
          />
        <TripDetails
          key={trip.id}
          id={trip.id}
          is_completed={trip.is_completed}
          first_name={trip.first_name}
          last_name={trip.last_name}
          car_model={trip.car_model}
          car_make={trip.car_make}
          car_color={trip.car_color}
          licence_plate={trip.licence_plate}
          phone_number={trip.phone_number}
          cancelTrip={props.cancelTrip}
        />
      </article>
    );
  });

  return (
    <ul>
      {tripsForUser}
    </ul>
  );
}