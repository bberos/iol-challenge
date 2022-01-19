import React from "react";
import Characters from "../../components/Characters";
import Paginate from "../../components/Paginate";
import { useFavourites } from "../../context/FavouritesProvider";
import usePagination from "../../hooks/usePagination";

export default function Favourites() {
  const { favCharactersIds } = useFavourites();
  const { page, setPage, isLoading, totalPaginas, characters } = usePagination({
    limit: 15,
    isFavouritePage: true,
    totalFavChars: favCharactersIds.length,
    favCharactersIds,
  });

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {isLoading ? <h1>Cargando</h1> : <Characters characters={characters} />}
      <Paginate totalPaginas={totalPaginas} page={page} setPage={setPage} />
    </div>
  );
}
