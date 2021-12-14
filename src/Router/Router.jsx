import { BrowserRouter as BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from "react";

import { Home } from "../Screens/Home"
import { Profile } from "../Screens/Profile"
import { Chats } from "../Screens/Chats"

const ROUTES = {
  HOME: "/",
  PROFILE: "profile",
  CHATS: "chats",
}
export const Router = () => {
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to={ROUTES.PROFILE}>profile</Link>
          </li>
          <li>
            <Link to={ROUTES.CHATS}>chats</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact patch="/chats">
          <Chats />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

