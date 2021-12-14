import { store } from "../../Store";
import { BrowserRouter as BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from "react";
import { Chats1 } from "../Chats1"
const ROUTES = {
  CHAT1: "chats/1",
}
export const Chats = () => {
  return (
    <div>
      <h4>Chats</h4>
      <ul>
        <li><Link to={ROUTES.CHAT1}>Чат 1</Link></li>
      </ul>
      <Switch>
        <Route exact path="/chats/1">
          <Chats1 />
        </Route>
      </Switch></div>

  );
}



