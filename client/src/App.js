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
import Profile from "./pages/Profile";

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
      const user = response.data
      if (response.data.status !== 401) {
        localStorage.setItem("token", user.token);
        localStorage.setItem("user_id", user.user_id);
      }
      return user;
    });
  }

  function onRegister(email, password, firstName, lastName) {
    return axios({
      method: "post",
      url: "/api/register",
      data: {
        user: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        },
      },
    }).then((response) => {
      const user = response.data
      if (response.data.status !== 401) {
        localStorage.setItem("token", user.token);
        localStorage.setItem("user_id", user.user_id);
      }
      return user;
    });
  }

  function loginCheck(email, password) {
    onLogin(email, password).then((user) => {
      setUser(user);
    });
  }

  function registerCheck(email, password, firstName, lastName) {
    onRegister(email, password, firstName, lastName).then((user) => {
      setUser(user);
    });
  }

  return (
    <main>
      <NavBar user={user}/>
      <Route exact path="/" name="Home">
        <Home />
      </Route>
      <Route exact path="/login" name="Login">
        <Login onLogin={loginCheck} />
      </Route>
      <Route exact path="/register" name="Register">
        <Register onRegister={registerCheck} />
      </Route>
      <Route exact path="/rides" name="Rides">
        <Rides />
      </Route>
      <Route exact path="/trips" name="Trips">
        <Trips />
      </Route>
      <Route exact path="/profile" name="Profile">
        <Profile />
      </Route>
    </main>
  );
}
