import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
// import { NavBar } from "./nav/NavBar";
import { Home } from "./Home";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Artists.css";

export const Artists = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("artist_login")) {
          return (
            <>
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);