import React from "react";

export default function Ride(props) {
  return (
    <div>
      <p>{props.first_name}</p>
      <p>{props.last_name}</p>
      <p>{props.car_model}</p>
      <p>{props.car_make}</p>
      <p>{props.car_color}</p>
      <p>{props.pickup}</p>
      <p>{props.dropoff}</p>
      <p>{props.departure}</p>
      <p>{props.cost}</p>
    </div>
  );
}
