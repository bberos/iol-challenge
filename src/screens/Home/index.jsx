import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, SubHeader, FavouriteButton } from "./styles";
import Paginate from "../../components/Paginate";
import usePagination from "../../hooks/usePagination";
import SelectLocation from "../../components/SelectLocation";
import Characters from "../../components/Characters";
import { ReactComponent as FavIcon } from "./../../assets/icons/pickleFav.svg";
import { useFavourites } from "../../context/FavouritesProvider";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState();

  //Custom hook
  const { isLoading, characters, totalPaginas, options, page, setPage } =
    usePagination({
      limit: 15,
      selectedLocation,
    });
  const { setIsFavouritePage } = useFavourites();

  useEffect(() => {
    setIsFavouritePage(false);
  }, []);

  return (
    <Container>
      <SubHeader>
        <SelectLocation
          value={selectedLocation}
          options={options}
          setSelectedLocation={setSelectedLocation}
          setPage={setPage}
        />
        <Link to="/favourites">
          <FavouriteButton>
            <h1>Ver Favoritos</h1>
            <FavIcon width="25px" height="30px" fill="#06750e" />
          </FavouriteButton>
        </Link>
      </SubHeader>
      <h1 className="title">Personajes</h1>
      {isLoading ? <h1>Cargando</h1> : <Characters characters={characters} />}
      <Paginate totalPaginas={totalPaginas} page={page} setPage={setPage} />
    </Container>
  );
}
