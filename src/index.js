import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.css";
import Search from "./Search";
import Profile from "./Profile";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect />{" "}
        </Route>
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
       
      </Switch>
    </Router>
  </React.StrictMode>
);
