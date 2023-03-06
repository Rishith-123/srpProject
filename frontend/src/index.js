import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
//signup a
import Signup from "./components/Signup";
import Login from "./components/Login";

//otp verification
import UserPermit from "./components/otpverify";
import OtpSuccess from "./components/otpSuccess";
import EmailVerify from "./components/EmailVerify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* <Redirect to="/admin/dashboard" /> */}
      <Route path="/signup" render={() => <Signup />} />
      <Route path="/login" render={() => <Login />} />

      {/* otp verification */}
      <Route path="/users/:id/verify/:token" render={() => <EmailVerify />} />
      <Route path="/usersPermission/:email/verify/:token" render={() => <UserPermit />} />
      <Route path="/otpSuccess" render={() => <OtpSuccess />} />

    </Switch>
  </BrowserRouter>
);
