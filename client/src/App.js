import React from "react";
import { Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rides from "./pages/Rides";
import Trips from "./pages/Trips";

//Styles
import './app.scss'

export default function App() {
  return (
    <main>
      <NavBar/>
        <Route exact path="/" name="Home">
          <Home />
        </Route>
        <Route exact path="/login" name="Login">
          <Login />
        </Route>
        <Route exact path="/register" name="Register">
          <Register />
        </Route>
        <Route exact path="/rides" name="Rides">
          <Rides />
        </Route>
        <Route exact path="/trips" name="Trips">
          <Trips />
        </Route>
    </main>
  );
}
