import React, { useState } from "react";
//import './styles/navbar.scss';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page-container">
      <h1>Login!</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onLogin(email, password);
        }}
      >
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
