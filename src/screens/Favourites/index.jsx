import React, { useEffect } from "react";
import Characters from "../../components/Characters";
import Paginate from "../../components/Paginate";
import { useFavourites } from "../../context/FavouritesProvider";
import usePagination from "../../hooks/usePagination";

export default function Favourites() {
  const { favCharactersIds, setIsFavouritePage } = useFavourites();
  const { page, setPage, isLoading, totalPaginas, characters } = usePagination({
    limit: 15,
    isFavouritePage: true,
    totalFavChars: favCharactersIds.length,
    favCharactersIds,
  });
  useEffect(() => {
    setIsFavouritePage(true);
  });
  return (
    <div>
      <h1>Mis Favoritos</h1>
      {isLoading || characters.info ? (
        <h1>Cargando</h1>
      ) : (
        <Characters characters={characters} />
      )}
      <Paginate totalPaginas={totalPaginas} page={page} setPage={setPage} />
    </div>
  );
}
