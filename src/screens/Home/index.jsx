import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, SubHeader } from "./styles";
import Paginate from "../../components/Paginate";
import usePagination from "../../hooks/usePagination";
import SelectLocation from "../../components/SelectLocation";
import Characters from "../../components/Characters";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState();
  //Custom hook
  const { isLoading, characters, totalPaginas, options, page, setPage } =
    usePagination({
      limit: 15,
      selectedLocation,
    });

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
          <h1>Ver Favoritos</h1>
        </Link>
      </SubHeader>
      <h1>Personajes</h1>
      {isLoading ? <h1>Cargando</h1> : <Characters characters={characters} />}
      <Paginate totalPaginas={totalPaginas} page={page} setPage={setPage} />
    </Container>
  );
}
