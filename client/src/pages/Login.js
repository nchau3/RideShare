import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Login</h1>
      </div>
      <div className="form-center">
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

            <button type="submit">SUBMIT</button>
          </form>
          <footer>New to RoundTrip? Click <Link to="/register">here</Link> to sign up.</footer>
        </div>
      </div>
    </div>
  );
}
