import React from "react";
//import './styles/navbar.scss';

export default function Login() {
  return (
    <div class="page-container">
    <h1>Login!</h1>
    <form method="POST" action="/login">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password"/>

      <button type="submit">Submit</button>
    </form>
  </div>
  );
}