import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Artists.css";
import { NavBar } from "./nav/NavBar";
import background from "./images/brush-background.jpeg";

export const Artists = () => (
  <>
  <img className="background" src={background} alt="paint splatters" />

    <Route
      render={() => {
        if (localStorage.getItem("artist_login")) {
          return (
            <>
              <ApplicationViews />
              <NavBar />
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