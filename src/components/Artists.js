import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Artists.css";
import { NavBar } from "./nav/NavBar";
import background from "./brush-background.jpeg";

export const Artists = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("artist_login")) {
          return (
            <>
              <NavBar />
              <img className="background" src={background} alt="paint splatters" />
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


{/* <div className="background" style={{ 
      backgroundImage: `url("https://www.rawpixel.com/image/597475/creative-paint-texture-background")` 
    }}></div> */}