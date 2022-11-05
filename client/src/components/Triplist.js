import React from "react";

//Components
import RideListItem from "./RideListItem";

//import './styles/ride.scss';

export default function TripList(props) {

  const tripsForUser = props.trips.map((trip) => {
    return (
      <>
      <RideListItem
        key={trip.id}
        first_name={trip.first_name}
        last_name={trip.last_name}
        avatar={trip.avatar}
        car_model={trip.car_model}
        car_make={trip.car_make}
        car_color={trip.car_color}
        pickup={trip.pickup}
        dropoff={trip.dropoff}
        departure={trip.departure_date_time}
        onClick={props.onClick}
        cost={trip.cost_per_seat}
        rating={trip.rating}
        trip_count={trip.trip_count}
        remaining_seats={trip.remaining_seats}
      />
      <footer>
        <div>UPCOMING</div>
        <div>CONFIRMATION #</div>
        <div>DRIVER DETAILS</div>
      </footer>
      </>
    );
  });

  return (
    <ul>
      {tripsForUser}
    </ul>
  );
}