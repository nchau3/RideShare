import React from "react";

export default function NoResults(props) {

  return (
    <article className="form-container no-results">
      <h1>No results!</h1>
      <h3>{props.message}</h3>
    </article>
  );
}