import { BrowserRouter as BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from "react";

import { Home } from "../Screens/Home"
import { Profile } from "../Screens/Profile"
import { Chats } from "../Screens/Chats"
import { SignIn } from "../Screens/Signin"
import { SignUp } from "../Screens/Signup"

const ROUTES = {
  HOME: "/",
  PROFILE: "profile",
  CHATS: "chats",
  SING_IN: "sign-in",
  SING_UP: "sign-up"
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
          <li>
            <Link to={ROUTES.SING_IN}>SingIn</Link>
          </li>
          <li>
            <Link to={ROUTES.SING_UP}>SingUp</Link>
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
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

