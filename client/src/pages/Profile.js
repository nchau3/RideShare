import React, { useEffect, useState } from "react";
import axios from "axios";

//import './styles/navbar.scss';

export default function Profile() {
  const [user, setUser] = useState("");

  const user_id = localStorage.getItem("user_id");

  //mock data for number of trips completed
  const trip_count = Math.floor(Math.random() * 50);

  useEffect(() => {
    axios.get(`api/users/${user_id}`)
    .then(response => {
      setUser(response.data[0]);
    })
  }, [user_id]);

  return (
    <div className="page-container">
    {user ? 
      <div>
        <img src={user.avatar} alt="user profile pic"/>
        <p>First name: {user.first_name}</p>
        <p>Last name: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <p>Password: ***********</p>
        <p>Trips completed: {trip_count}</p>
      </div>
        :
        <h1>Please login first.</h1>
      }
    </div>
  );
}