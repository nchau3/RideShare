import React, { useEffect, useState } from "react";
import axios from "axios";

//import './styles/navbar.scss';

export default function Profile() {
  const [user, setUser] = useState("");

  const user_id = localStorage.getItem("user_id");

  const trip_count = Math.floor(Math.random() * 5000);

  useEffect(() => {
    axios.get(`api/users/${user_id}`)
    .then(response => {
      console.log(response.data);
      setUser(response.data[0]);
    })
  }, []);

  return (
    <div className="page-container">
      <img src={user.avatar} />
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <p>Email: {user.email}</p>
      <p>Password: ***********</p>
      <p>Trips completed: {trip_count}</p>
    </div>
  );
}