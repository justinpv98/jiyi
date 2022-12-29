import React from "react";
import { Routes, Route } from "react-router-dom";
import { globalStyles } from "./stitches.config";

// Pages
import Home from "@/pages/Home/Home";

function App() {
  globalStyles();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
