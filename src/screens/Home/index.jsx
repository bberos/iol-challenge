import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import {
  getAllCharactersList,
  getLimitCharacters,
  getLocations,
} from "../../services/request";
import { Container, ListContainer } from "./styles";
import ReactPaginate from "react-paginate";
import ReactSelect from "react-select";

export default function Home() {
  const [totalCharacters, setTotalCharacters] = useState();
  const [locations, setLocations] = useState();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [options, setOptions] = useState([]);
  const [actualPageIds, setActualPageIds] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchNumberOfCharacters();
    fetchLocations();
  }, []);
  useEffect(() => {
    if (totalCharacters !== undefined) {
      hacerArray();
      hacerObjeto();
      dividirArray();
      pageData();
    }
  }, [totalCharacters, page]);

  useEffect(() => {
    if (actualPageIds !== "") {
      fetchCharacters();
    }
  }, [actualPageIds, page]);
  const fetchNumberOfCharacters = async () => {
    const charactersData = await getAllCharactersList();
    setTotalCharacters(charactersData.info.count);
    setIsLoading(false);
  };

  const fetchLocations = async () => {
    const locations = await getLocations();
    setLocations(locations.results);
    setIsLoading(false);
    //guardo las opciones para usar react-select
    let options = locations.results.map((e) => {
      return {
        value: e.id,
        label: e.name,
        residents: e.residents,
      };
    });
    setOptions(options);
  };

  // ACA ARMO MY ARRAY DE .leng = 826 ITEMS
  let myArray = [];
  const limit = 15;
  let totalPaginas = Math.ceil(totalCharacters / limit);
  let pages = {};

  // CREAMOS EL ARRAY DE TODOS LOS IDS
  const hacerArray = () => {
    for (let index = 1; index <= totalCharacters; index++) {
      myArray.push(index);
    }
    console.log("EL HACER ARRAY");
  };

  // CREAMOS EL OBJETO PAGINAS CON LA KEY
  const hacerObjeto = () => {
    for (let index = 1; index <= totalPaginas; index++) {
      const pageNumber = `page${index}`;
      pages[pageNumber] = [];
    }
    console.log("EL HACER OBJETO");
  };

  const dividirArray = () => {
    const myNewArray = myArray.map((e) => e);
    let paginaActual = 1;
    for (let id = 0; id <= myNewArray.length; id++) {
      let pageMaker = `page${paginaActual.toString()}`;
      if (id % limit === 0) {
        let savePage = myNewArray.slice(
          (paginaActual - 1) * limit,
          paginaActual * limit
        );
        pages[pageMaker] = savePage;
        paginaActual++;
      }
    }
  };

  const pageData = () => {
    let pageName = `page${page}`;
    let data = pages[pageName].join();
    setActualPageIds(data);
  };
  const fetchCharacters = async () => {
    const charactersData = await getLimitCharacters(actualPageIds);
    setCharacters(charactersData);
    setIsLoading(false);
  };

  //pagination
  const handleOnPageChange = (data) => {
    let selected = data.selected + 1;
    setPage(selected);
  };

  //select
  const handleChangeLocation = (selectedOption) => {
    setSelectedLocation(selectedOption);
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
      <h1>Personajes</h1>
      <ListContainer>
        {!characters.length >= 1 ? (
          <CharacterCard characterData={characters} />
        ) : (
          characters.map((item) => {
            return <CharacterCard key={item.id} characterData={item} />;
          })
        )}
      </ListContainer>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ReactPaginate
          className="paginate"
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={totalPaginas}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handleOnPageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </Container>
  );
}
