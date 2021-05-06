//ApplicationViews file contains each view needed for full functionality of the app
import React from "react";
import { Route } from "react-router-dom";

import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

import { Home } from "./Home";

import { Events } from "./events/Events";
import { SavedEvents } from "./events/SavedEvents";
import { SavedEventsPreview } from "./events/SavedEventsPreview";
import { NoteEdit } from "./events/EditNotes";

import { Orgs } from "./organizations/OrgList";
import { EventsByOrg } from "./organizations/SelectedOrgEvents"

import { Council } from "./council/Council";

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

        <Route exact path="/Events">
          <Events />
          <aside>
                        <SavedEventsPreview

                        />
                    </aside>
        </Route>

        <Route path="/savedEvents/edit/:savedEventId(\d+)">
          <NoteEdit />
        </Route>

        <Route exact path="/Organizations">
          <Orgs />
        </Route>

        <Route exact path="/organizations/events/:organizationId(\d+)">
          <EventsByOrg />
        </Route>

        <Route exact path="/Council">
          <Council />
        </Route>



      </>
    )
  }
  