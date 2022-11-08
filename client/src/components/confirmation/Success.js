import React from "react";

export default function Success(props) {
  return(
    <div className="form-container">
      <h1>{props.message}</h1>
    </div>
  )
}