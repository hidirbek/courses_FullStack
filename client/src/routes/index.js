import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import AllCourses from "../pages/allCourses/AllCourses";

const index = () => {
  return (
    <>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/all_courses">
        <AllCourses />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </>
  );
};

export default index;
