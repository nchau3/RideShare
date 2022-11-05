import React, { useState } from "react";

export default function SearchRides(props) {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [conditions, setConditions] = useState({
    allow_pets: null,
    allow_oversize: null,
    allow_skis: null,
    allow_bikes: null
  }
  );

  function toggle(value) {
    if (value === null) {
      return true
    }
  }

  const searchParams = {
    pickup: pickup,
    dropoff: dropoff,
    departure_date_time: departure,
    allow_pets: conditions.allow_pets,
    allow_oversize: conditions.allow_oversize,
    allow_skis: conditions.allow_skis,
    allow_bikes: conditions.allow_bikes
  }

  return (
    <article className="form-container">
        <h1>Where are you headed?</h1>
        <h3>Find a ride that fits for you.</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(searchParams);
        }}
      >
      <div className="location-input">
        <input
          type="text"
          placeholder="Leaving from"
          name="pickup"
          value={pickup}
          onChange={(event) => setPickup(event.target.value)}
        />
        <input
          type="text"
          id="dropoff"
          placeholder="Going to"
          name="dropoff"
          value={dropoff}
          onChange={(event) => setDropoff(event.target.value)}
        />
      </div>

        <label for="departure">DEPARTURE DATE</label>
        <input
          type="date"
          placeholder="Departure Date"
          name="departure"
          value={departure}
          onChange={(event) => setDeparture(event.target.value)}
        />

        <div className="checkbox-container">
          <div className="checkbox">
            <label id="allow_pets"><div className="icon"><i class="fa-solid fa-dog"></i></div> Pets</label>
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
            <label id="allow_oversize"><div className="icon"><i class="fa-solid fa-suitcase"></i></div>Oversize</label>
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
            <label id="allow_skis"><div className="icon"><i class="fa-solid fa-person-skiing"></i></div> Skis</label>
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
          <label id="allow_bikes"><div className="icon"><i class="fa-solid fa-bicycle"></i></div> Bikes</label>
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

        </div>

        <button type="submit">Submit</button>
      </form>
    </article>
  );
}