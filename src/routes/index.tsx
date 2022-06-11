import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import NoMatch from "../pages/404";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />

        <Route path="/" element={<Navigate replace to="dashboard" />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
