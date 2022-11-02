import React, { useState } from "react";
import "./styles/register.scss";

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(firstName, lastName);

  return (
    <div class="page-container">
      <h1>Register!</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onRegister(email, password, firstName, lastName);
        }}
      >
        <label for="first_name">First name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label for="last_name">Last name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <label for="password_confirm">Confirm password:</label>
        <input type="password" id="password_confirm" name="password_confirm" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
