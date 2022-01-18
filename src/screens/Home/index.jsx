import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import { Container, ListContainer } from "./styles";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import Paginate from "../../components/Paginate";

//hooks
import usePagination from "../../hooks/usePagination";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState();
  const [page, setPage] = useState(1);
  //hooks
  const { isLoading, characters, totalPaginas, options } = usePagination({
    limit: 15,
    selectedLocation,
    page,
  });
  //select
  const handleChangeLocation = (selectedOption) => {
    setSelectedLocation(selectedOption);
    setPage(1);
  };
  //pagination
  const handleOnPageChange = (data) => {
    let selected = data.selected + 1;
    setPage(selected);
  };

  return (
    <Container>
      <h2>Buscar por locacion</h2>
      <ReactSelect
        value={selectedLocation}
        onChange={handleChangeLocation}
        // clearable={this.state.clearable}
        // searchable={this.state.searchable}
        options={options}
      />
      <Link to="/favourites">
        <button>Favoritos</button>
      </Link>
      <h1>Personajes</h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <div>
          <ListContainer>
            {!characters.length >= 1 ? (
              <CharacterCard characterData={characters} />
            ) : (
              characters.map((item) => {
                return <CharacterCard key={item.id} characterData={item} />;
              })
            )}
          </ListContainer>
          <Paginate
            totalPaginas={totalPaginas}
            page={page}
            handleOnPageChange={handleOnPageChange}
          />
        </div>
      )}
    </Container>
  );
}
