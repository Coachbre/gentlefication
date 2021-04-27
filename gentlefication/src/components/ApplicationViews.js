//ApplicationViews file contains each view needed for full functionality of the app
import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const ApplicationViews = () => {
    return (
      <>
  
        <Route exact path="/Login">
          <Login />
        </Route>
  
        <Route exact path="/Register">
          <Register />
        </Route>
  
        
      </>
    )
  }
  