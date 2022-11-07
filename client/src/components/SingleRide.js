import React from "react";
import "../styles/component-styles/single-ride.scss";

export default function SingleRide(props) {
  return (
    <article className="single-ride">
      <div className="ride-info">
        <header>
          <img src={props.avatar} className="avatar" alt="driver" />
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
          <div className="seats-price">2 seats left - ${props.cost} per seat</div>
        </div>
        <p className="ride-description">{props.description}</p>
      </div>
      <div className="car-info">
        <img src={props.car_image} className="car-pic" alt="driver's car"/>
        <h4>{props.car_make} {props.car_model}</h4>
        <div className="ride-conditions">
          {props.allow_pets &&
            <div className="condition-item">
              <div className="icon">
                <i class="fa-solid fa-dog"></i>
              </div>
              Allows Pets
            </div>
          }
          {props.allow_oversize &&
            <div className="condition-item">
              <div className="icon">
                <i class="fa-solid fa-suitcase"></i>
              </div>
              <div>Space for Luggage</div>
            </div>
          }
          {props.allow_skis &&
            <div className="condition-item">
              <div className="icon">
                <i class="fa-solid fa-person-skiing"></i> 
              </div>
              Room for Skis
            </div>
          }
          {props.allow_bikes &&
            <div className="condition-item">
              <div className="icon">
                <i className="fa-solid fa-bicycle"></i>
              </div>
              Room for Bikes
            </div>
          }
        </div>
      </div>
    </article>
  );
}
