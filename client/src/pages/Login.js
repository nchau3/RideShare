import React, { useState } from "react";
//import './styles/navbar.scss';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Sign In</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.onLogin(email, password);
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
