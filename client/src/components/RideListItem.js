import React from "react";
import '../styles/component-styles/ride-list-item.scss';

export default function RideListItem(props) {

  return (
    <article className="ride-container" onClick={() => props.onClick(props.id)}>
      <header>
        <img src={props.avatar} className="avatar" alt="user-avatar"/>
        <div>
          <h3>{props.pickup} to {props.dropoff}</h3>
          <p>Leaving {props.departure}</p>
        </div>
        <div>
          <div>Seats Remaining</div>
          <div className="price">${props.cost}</div>
          <div>per seat</div>
        </div>
      </header>
      <footer>
        <div>
          <div>{props.first_name} {props.last_name}</div>
          <div>5 stars, 50 rides</div>
        </div>
        <div>
          <div>Pickup: {props.pickup}</div>
          <div>Dropoff: {props.dropoff}</div>
        </div>
        <div className="car-info">
          <div>{props.car_make} {props.car_model}</div>
          <div>{props.car_color}</div>
        </div>
      </footer>
    </article>
  );
}