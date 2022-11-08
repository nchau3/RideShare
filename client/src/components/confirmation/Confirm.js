import React from "react";

export default function Confirm(props) {
  return(
    <div className="form-container">
      <h1>{props.message}</h1>
      <div>
        <button className="confirm"onClick={() => props.cancelTrip(props.id)}>Confirm</button>
        <button className="cancel" onClick={() => props.goBack()}>Cancel</button>
      </div>
    </div>
  )
}