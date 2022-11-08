import React, { useEffect, useState } from "react";
import axios from "axios";

import '../styles/component-styles/profile.scss';

export default function Profile() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [dropdown, setDropdown] = useState("hidden");

  const user_id = localStorage.getItem("user_id");
  
  useEffect(() => {
    axios.get(`api/users/${user_id}`)
    .then(response => {
      setUser(response.data[0]);
    })
  }, [user_id]);

  function toggle(value) {
    if (value === "hidden") {
      return "";
    }
    if (value === "") {
      return "hidden";
    }
  }

  function updatePassword(newPassword) {
    axios.put(`api/users/${user_id}`, {
      password: newPassword
    })
    .then(response => {
      console.log(response.status);
      alert("Password updated!");
    })
  }
  
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Profile</h1>
      </div>
      <div className="form-center">
        <div className="form-container">
          <div className="user-profile">
            <ul>
              <li>
                <div></div>
                <img src={user.avatar} alt="user profile pic"/>
                <div></div>
              </li>
              <li>
                <div></div>
                <div>{user.first_name} {user.last_name}</div>
                <div></div>
              </li>
              <li>
                <div>Email:</div>
                <div>{user.email}</div>
              </li>
              <li>
                <div>Password:</div>
                <div>**********</div>
                <button onClick={() => setDropdown(toggle)}>CHANGE PASSWORD</button>
              </li>

              <li className={dropdown}>
                <div></div>
                <form
                onSubmit={(event) => {
                  event.preventDefault();
                  updatePassword(password);
                }}
                >
                  <input
                    type="text"
                    id="password"
                    placeholder="New Password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button type="submit">SUBMIT</button>
                </form>
                <div></div>
              </li>

              <li>
                <div>Trips Completed:</div>
                <div>37</div>
              </li>
              <li>
                <div>Payment info:</div>
                <div className="credit-card">**** **** **** 2246</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}