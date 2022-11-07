import React, { useState } from "react";
import classNames from "classnames";

export default function TripDetails(props) {
  const [dropdown, setDropdown] = useState(true);

  function toggle(value) {
    return !value;
  }

  const contactInfoClasses = classNames(
    "contact-container",
    { "hidden": dropdown }
  );

  return (
    <>
      <footer className="status-bar">
        {props.is_completed ?
          <div className="trip-status completed">COMPLETED</div>
          :
          <div className="trip-status upcoming">UPCOMING</div>
        }  
        <button onClick={() => setDropdown(toggle)}>DETAILS</button>
        <button onClick={() => props.cancelTrip(props.id)}> CANCEL TRIP </button>
      </footer>
      <article className={contactInfoClasses}>
        <div className="contact-info">
          <div>DRIVER CONTACT INFO</div>
          <div>
            <p>{props.first_name} {props.last_name}</p>
            <p>{props.car_make} {props.car_model}</p>
            <p>{props.licence_plate}</p>
            <p>{props.phone_number}</p>
          </div>
        </div>
      </article>
    </>
  );
}
