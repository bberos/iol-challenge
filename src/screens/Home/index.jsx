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
import { Link } from "react-router-dom";
import Paginate from "../../components/Paginate";

export default function Home() {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [locations, setLocations] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [options, setOptions] = useState([]);
  const [actualPageIds, setActualPageIds] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // ACA ARMO MY ARRAY DE .leng = 826 ITEMS
  let charIdsArray = [];
  const limit = 15;
  let totalPaginas = Math.ceil(totalCharacters / limit);
  const pages = {};
  useEffect(() => {
    fetchNumberOfCharacters();
    fetchLocations();
  }, []);
  useEffect(() => {
    if (totalCharacters !== undefined) {
      arrayMaker();
      // hacerObjeto();
      arrayDivider();
      if (selectedLocation === undefined) {
        pageData();
      }
    }
  }, [totalCharacters, page]);

  useEffect(() => {
    fetchCharacters();
  }, [actualPageIds]);

  useEffect(() => {
    if (selectedLocation !== undefined) {
      splitByLocationIds();
      pageDataByLocation();
    }
  }, [selectedLocation, page]);

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

  // CREAMOS EL ARRAY DE TODOS LOS IDS
  const arrayMaker = () => {
    for (let index = 1; index <= totalCharacters; index++) {
      charIdsArray.push(index);
    }
  };

  // CREAMOS EL OBJETO PAGINAS CON LA KEY
  const hacerObjeto = () => {
    for (let index = 1; index <= totalPaginas; index++) {
      const pageNumber = `page${index}`;
      pages[pageNumber] = [];
    }
  };

  const arrayDivider = (data = charIdsArray) => {
    const myNewArray = data.map((e) => e);
    let paginaActual = 1;
    for (let id = 0; id <= data.length; id++) {
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
    // splitByLocationIds(selectedOption);
  };

  const splitByLocationIds = () => {
    let resultsLocationIds = [];
    setTotalCharacters(selectedLocation.residents.length);
    console.log("ENTRA AL CORTAR");
    selectedLocation.residents.map((e) => {
      if (e.length === 45) {
        resultsLocationIds.push(e.substr(-3));
      } else if (e.length === 44) {
        resultsLocationIds.push(e.substr(-2));
      } else if (e.length === 43) {
        resultsLocationIds.push(e.substr(-1));
      }
    });
    arrayDividerByLocation(resultsLocationIds);
    pageDataByLocation();
    fetchCaractersByLocation();
  };

  const arrayDividerByLocation = (resultsLocationIds) => {
    console.log("PAGINACION DE LOCATION");
    let nuevoArray = resultsLocationIds.map((e) => e);
    let paginaActual = 1;
    for (let id = 0; id <= nuevoArray.length; id++) {
      let pageMaker = `page${paginaActual.toString()}`;
      if (id % limit === 0) {
        let savePage = nuevoArray.slice(
          (paginaActual - 1) * limit,
          paginaActual * limit
        );
        pages[pageMaker] = savePage;
        paginaActual++;
      }
    }
  };
  const pageDataByLocation = () => {
    let pageName = `page${page}`;
    let data = pages[pageName].join();
    setActualPageIds(data);
    // fetchCaractersByLocation();
  };
  const fetchCaractersByLocation = async () => {
    console.log("ENTRA AL FETCH");
    const charactersData = await getLimitCharacters(actualPageIds);
    setCharacters(charactersData);
    setIsLoading(false);
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
            handleOnPageChange={handleOnPageChange}
          />
        </div>
      )}
    </Container>
  );
}
