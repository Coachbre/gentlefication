import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const GentleApp = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("gentle_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
          //if a user is already logged in, render full page view
        } else {
          return <Redirect to="/login"/>;
        }
        // if not, show 'login' view
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    {/*displays login page view*/}

    <Route path="/register">
      <Register />
    </Route>
    {/*displays register page view*/}
  </>
)
