import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CharacterCard from "../../components/CharacterCard";
import { API } from "../../config/api";
import { useFavourites } from "../../context/FavouritesProvider";
export default function Favourites() {
  const { favCharactersIds } = useFavourites();
  useEffect(() => {}, []);
  return (
    <div>
      {/* <CharacterCard  /> */}
      <h1>Favoritos</h1>
    </div>
  );
}
