import React from "react";
import "./styles/register.scss";

export default function Register() {
  return (
    <div class="page-container">
      <h1>Register!</h1>
      <form method="POST" action="/register">
        <label for="first_name">First name:</label>
        <input type="text" id="first_name" name="first_name" />

        <label for="last_name">Last name:</label>
        <input type="text" id="last_name" name="last_name" />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label for="password_confirm">Confirm password:</label>
        <input type="password" id="password_confirm" name="password_confirm" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
