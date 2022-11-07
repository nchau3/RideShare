import React, { useState } from "react";
import classNames from "classnames";
import useVisualMode from "../hooks/useVisualMode";
import Confirm from "./confirmation/Confirm";
import Success from "./confirmation/Success";

const CONFIRM = "CONFIRM";
const HIDE = "HIDE";
const SUCCESS = "SUCCESS";

export default function TripDetails(props) {
  const [dropdown, setDropdown] = useState(true);
  const { mode, transition, back } = useVisualMode(HIDE);

  const contactInfoClasses = classNames(
    "contact-container",
    { "hidden": dropdown }
  );

  function toggle(value) {
    return !value;
  }

  function cancelToggle(mode) {
    if (mode === HIDE) {
      return CONFIRM;
    }
    if (mode === CONFIRM) {
      return HIDE;
    }
  }

  return (
    <>
      <footer className="status-bar">
        {props.is_completed ?
          <div className="trip-status completed">COMPLETED</div>
          :
          <div className="trip-status upcoming">UPCOMING</div>
        }
        <button onClick={() => setDropdown(toggle)}>DETAILS</button>
        <button onClick={() => transition(cancelToggle)}> CANCEL TRIP </button>
      </footer>
      {mode === CONFIRM &&
        <Confirm id={props.id} cancelTrip={props.cancelTrip} message="Cancel this trip?" goBack={back} />
      }
      {mode === SUCCESS &&
        <Success message="Trip cancelled!" />
      }
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
