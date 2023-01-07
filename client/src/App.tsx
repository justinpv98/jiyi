import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { globalStyles } from "./stitches.config";

// Routing
import RestrictedRoute from "./features/routing/RestrictedRoute";

// Pages
import Home from "@/pages/Home/Home";
import Register from "./pages/Register/Register";
import Navbar from "./features/ui/Navbar/Navbar";
import PrivateRoute from "./features/routing/PrivateRoute";

function App() {
  globalStyles();

  return (
    <Fragment>
      <Routes>
        <Route element={<RestrictedRoute/>}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute/>}>
        <Route element={<Navbar/>}  /> 
        </Route>
        
      </Routes>
    </Fragment>
  );
}

export default App;
