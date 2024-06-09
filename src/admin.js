import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/admin_sidebar";
import AdminDashboard from "./components/admin_dashboard";
import AddJudgment from "./components/admin_addjudgment";
import DeleteJudgment from "./components/admin_deleteJudgment";
import EditJudgment from "./components/admin_editJudgment";
import ReviewRequests from "./components/admin_ReviewJudgment";

const Admin = () => {
  console.log("asdsa");
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        assaasdsads
        <div className="flex-1 p-6">
          <Switch>
            <Route path="/admin" component={<AdminDashboard />} />
            <Route path="/admin/add-judgment" component={<AddJudgment />} />
            <Route
              path="/admin/delete-judgment"
              component={<DeleteJudgment />}
            />
            <Route path="/admin/edit-judgment" component={<EditJudgment />} />
            <Route
              path="/admin/review-requests"
              component={<ReviewRequests />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Admin;
