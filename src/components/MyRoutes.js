import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Dashboard from "./dashboard";

import Newdashboards from "./newdashboards";
import Mileage from "./mileage";
import Mileages from "./mileages";
import Transactions from "./transactions";
import Reports from "./reports";
import Forms from "./Forms";
import Order from "./order";
import {YoutubeForm}  from "../Formik/youtubeForm";

export default class MyRoutes extends Component {
  componentDidMount() {
    console.log("MyRoutes componentDidMount");
  }
  componentWillUnmount() {
    console.log("MyRoutes unmount");
  }
  render() {
    // console.log("route prps", this.props);
    // const {stud : {address }} = this.props
    // console.log("stud",address)
    return (
      <Routes>
        <Route index element={<SignIn name="Name prop passed" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Newdashboards />} />
          <Route path="newDashboard" element={<Newdashboards />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="mileage" element={<Mileage />} />
          <Route path="mileages" element={<Mileages />} />
          <Route path="reports" element={<Reports />} />
          <Route path="forms" element={<Forms />} />
          <Route path="ordered" element={<Order />} />
          <Route path="formik" element={<YoutubeForm />} />
        </Route>
      </Routes>
    );
  }
}
