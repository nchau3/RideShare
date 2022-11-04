import React, { useEffect, useState } from "react";
import axios from "axios";

//import './styles/navbar.scss';

export default function Profile() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const user_id = localStorage.getItem("user_id");
  
  useEffect(() => {
    axios.get(`api/users/${user_id}`)
    .then(response => {
      setUser(response.data[0]);
    })
  }, [user_id]);

  function updatePassword(newPassword) {
    axios.put(`api/users/${user_id}`, {
      password: password
    })
    .then(response => {
      console.log(response.status)
    })
  }
  
  return (
    <div className="page-container">
    {user ? 
      <div>
        <img src={user.avatar} alt="user profile pic"/>
        <p>First name: {user.first_name}</p>
        <p>Last name: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <p>Password: ***********</p>
        <p>Trips completed: 5000+</p>
        <form
        onSubmit={(event) => {
          event.preventDefault();
          updatePassword(password);
        }}
        >
          <label for="password-change">Change Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
        :
        <h1>Please login first.</h1>
      }
    </div>
  );
}