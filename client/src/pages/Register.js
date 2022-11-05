import React, { useState } from "react";

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Register for Rideshare</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.onRegister(email, password, firstName, lastName);
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <input type="password" placeholder="Confirm Password" name="password_confirm" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
