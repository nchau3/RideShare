import React from "react";
import "../styles/component-styles/single-ride.scss";

export default function SingleRide(props) {
  return (
    <section>
      <article className="single-ride">
        <div className="ride-info">
          <header>
            <img src={props.avatar} className="avatar" alt="user-profile-pic" />
            <div>
              <h4>{props.first_name} {props.last_name}</h4>
              <div>{props.rating} <i class="fa-solid fa-star"></i> {props.trip_count} rides</div>
            </div>
          </header>
          <h3>{props.pickup} to {props.dropoff}</h3>
          <p>Leaving {props.departure}</p>
          <div>
            <div>Pickup: {props.pickup}</div>
            <div>Dropoff: {props.dropoff}</div>
          </div>
          <img src={props.car_image} className="car-pic" alt="image of driver's car" />
        </div>
      </article>
      <button onClick={() => props.onClick(props.id, props.user_id)}>Book Trip</button>
    </section>
  );
}
