import React from "react";
import { Routes, Route } from "react-router-dom";
import { globalStyles } from "./stitches.config";

// Pages
import Home from "@/pages/Home/Home";
import Register from "./pages/Register/Register";

function App() {
  globalStyles();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
