//ApplicationViews file contains each view needed for full functionality of the app
import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

import { Home } from "./Home";

import  SignIn  from "./auth/SignIn"
//SignInSide is a default function, and does not require {}


export const ApplicationViews = () => {
    return (
      <>
  
        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Register">
          <Register />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>



        
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
  
        
      </>
    )
  }
  