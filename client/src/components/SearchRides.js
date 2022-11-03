import React, { useState } from "react";
import '../styles/component-styles/search-rides.scss';

export default function SearchRides(props) {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [conditions, setConditions] = useState({
    allow_pets: false,
    allow_oversize: false,
    allow_skis: false,
    allow_bikes: false
  }
  );

  function toggle(value) {
    return !value;
  }

  const searchParams = {
    pickup: pickup,
    dropoff: dropoff,
    allow_pets: conditions.allow_pets,
    allow_oversize: conditions.allow_oversize,
    allow_skis: conditions.allow_skis,
    allow_bikes: conditions.allow_bikes
  }

  return (
    <article className="page-card">
        <h1>Where are you headed?</h1>
        <h3>Find a ride that fits for you.</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(searchParams);
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
            onChange={() => {
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
            value="allow_oversize"
            checked={conditions.allow_oversize}
            onChange={() => {
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
            value="allow_skis"
            checked={conditions.allow_skis}
            onChange={() => {
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
            value="allow_bikes"
            checked={conditions.allow_bikes}
            onChange={() => {
              setConditions(prev => ({...prev, allow_bikes: toggle(conditions.allow_bikes)}))}
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </article>
  );
}