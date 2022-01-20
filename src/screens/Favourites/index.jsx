import React, { useEffect } from "react";
import { Container } from "./styles";
import Characters from "../../components/Characters";
import Paginate from "../../components/Paginate";
import { useFavourites } from "../../context/FavouritesProvider";
import usePagination from "../../hooks/usePagination";
import Loader from "../../components/Loader";

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
    <Container>
      <h1 className="title">Mis Favoritos</h1>
      {/* {isLoading || characters.info ? ( */}
      {characters.info ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Characters characters={characters} />
          <Paginate totalPaginas={totalPaginas} page={page} setPage={setPage} />
        </>
      )}
    </Container>
  );
}
