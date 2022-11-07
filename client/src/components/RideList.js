import React from "react";

//Components
import RideListItem from "./RideListItem";

export default function RideList(props) {

  const searchResults = props.rides.map((ride) => {
    return (
      <RideListItem
        key={ride.id}
        id={ride.id}
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
        onClick={props.onClick}
        rating={ride.rating}
        trip_count={ride.trip_count}
        remaining_seats={ride.remaining_seats}
      />
    );
  });

  return (
    <ul className="search-results">
        {searchResults}
    </ul>
  );
}