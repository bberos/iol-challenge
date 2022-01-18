import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CharacterDetail from "./screens/CharacterDetail";
import Favourites from "./screens/Favourites";
import Home from "./screens/Home";
function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={"/character/:id"} element={<CharacterDetail />} />
      <Route path={"/favourites"} element={<Favourites />} />
    </Routes>
  );
}

export default MyRoutes;
