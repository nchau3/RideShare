import React, { useState } from "react";
import '../styles/component-styles/search-rides.scss';

export default function SearchRides(props) {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [conditions, setConditions] = useState({
    allow_pets: true,
    allow_oversize: true,
    allow_skis: true,
    allow_bikes: true
  }
  );
  //allow oversize, skis, bikes

  function toggle(value) {
    return !value;
  }

  return (
    <article className="page-card">
      <h1>Where are you headed?</h1>
      <h3>Find a ride that fits for you.</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.searchRides();
        }}
      >
        <label for="pickup">Pickup:</label>
        <input
          type="text"
          id="pickup"
          name="pickup"
          value={pickup}
          onChange={(event) => setPickup(event.target.value)}
        />

        <label for="dropoff">Dropoff:</label>
        <input
          type="text"
          id="dropoff"
          name="dropoff"
          value={dropoff}
          onChange={(event) => setDropoff(event.target.value)}
        />

        <div className="checkbox">
          <label for="allow_pets">Pets:</label>
          <input 
            type="checkbox"
            id="allow_pets"
            name="allow_pets"
            value="allow_pets"
            checked={conditions.allow_pets}
            onChange={(event) => {
              setConditions(prev => ({...prev, allow_pets: toggle(conditions.allow_pets)}))}
            }
          />
        </div>

        <div className="checkbox">
          <label for="allow_oversize">Oversize Luggage:</label>
          <input 
            type="checkbox"
            id="allow_oversize"
            name="allow_oversize"
            value={conditions.allow_oversize}
            onChange={(event) => {
              setConditions(prev => ({...prev, allow_oversize: toggle(conditions.allow_oversize)}))}
            }
          />
        </div>

        <div className="checkbox">
          <label for="allow_skis">Skis:</label>
          <input 
            type="checkbox"
            id="allow_skis"
            name="allow_skis"
            value={conditions.allow_skis}
            onChange={(event) => {
              setConditions(prev => ({...prev, allow_skis: toggle(conditions.allow_skis)}))}
            }
          />
        </div>

        <div className="checkbox">
          <label for="allow_bikes">Bikes:</label>
          <input 
            type="checkbox"
            id="allow_bikes"
            name="allow_bikes"
            value={conditions.allow_bikes}
            onChange={(event) => {
              setConditions(prev => ({...prev, allow_bikes: toggle(conditions.allow_bikes)}))}
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </article>
  );
}