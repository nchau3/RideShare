import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

//Components
import NavBar from "./components/NavBar";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rides from "./pages/Rides";
import Trips from "./pages/Trips";

//Styles
import "./app.scss";

export default function App() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token);

  function onLogin(email, password) {
    return axios({
      method: "post",
      url: "/api/login",
      data: {
        user: {
          email: email,
          password: password,
        },
      },
    }).then((response) => {
      console.log("response", response.data);
      const token = response.data.token;
      const id = response.data.user_id;
      if (response.data.status !== 401) {
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", id);
      }
      return token;
    });
  }

  function loginCheck(email, password) {
    onLogin(email, password).then((token) => {
      setUser(token);
    });
  }

  return (
    <main>
      <NavBar />
      <Route exact path="/" name="Home">
        <Home />
      </Route>
      <Route exact path="/login" name="Login">
        <Login onLogin={loginCheck} />
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
