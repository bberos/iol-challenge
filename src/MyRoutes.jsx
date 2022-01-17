import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CharacterDetail from "./screens/CharacterDetail";
import Home from "./screens/Home";
function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={"/character/:id"} element={<CharacterDetail />} />
    </Routes>
  );
}

export default MyRoutes;
