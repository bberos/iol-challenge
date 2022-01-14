import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
