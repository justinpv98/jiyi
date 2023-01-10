import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { globalStyles } from "./stitches.config";

// Routing
import RestrictedRoute from "./features/routing/RestrictedRoute";
import PrivateRoute from "./features/routing/PrivateRoute";

// Components
import Layout from "./features/ui/Layout/Layout";

// Pages
import Home from "@/pages/Home/Home";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  globalStyles();

  return (
    <Fragment>
      <Layout>
      <Routes>
        <Route element={<RestrictedRoute redirectPath="/dashboard" />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
