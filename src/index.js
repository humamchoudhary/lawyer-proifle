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
import Admin from "./admin";
import Sidebar from "./components/admin_sidebar";
import AdminDashboard from "./components/admin_dashboard";
import AddJudgment from "./components/admin_addjudgment";
import DeleteJudgment from "./components/admin_deleteJudgment";
import EditJudgment from "./components/admin_editJudgment";
import ReviewRequests from "./components/admin_ReviewJudgment";
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
        <Route path="/admin/" component={AdminDashboard} />
        <Route path="/admin/add-judgment" component={AddJudgment} />
        <Route path="/admin/delete-judgment" component={DeleteJudgment} />
        <Route path="/admin/edit-judgment" component={EditJudgment} />
        <Route path="/admin/review-requests" component={ReviewRequests} />
      </Switch>
    </Router>
  </React.StrictMode>
);
