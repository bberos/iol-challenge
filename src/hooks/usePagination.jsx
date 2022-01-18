import React, { useEffect, useState } from "react";
import { getAllCharactersList, getLimitCharacters } from "../services/request";
import useLocation from "./useLocation";

export default function usePagination({ limit, selectedLocation, page }) {
  const [isLoading, setIsLoading] = useState(true);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [actualPageIds, setActualPageIds] = useState("");
  const [characters, setCharacters] = useState([]);
  const pages = {};
  const { options } = useLocation({
    selectedLocation,
    page,
    limit,
    pages,
    actualPageIds,
    setIsLoading,
    setTotalCharacters,
    setActualPageIds,
    setCharacters,
  });
  let charIdsArray = [];
  let totalPaginas = Math.ceil(totalCharacters / limit);

  useEffect(() => {
    fetchNumberOfCharacters();
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

  const fetchNumberOfCharacters = async () => {
    const charactersData = await getAllCharactersList();
    setTotalCharacters(charactersData.info.count);
    setIsLoading(false);
  };

  // CREAMOS EL ARRAY DE TODOS LOS IDS
  const arrayMaker = () => {
    for (let index = 1; index <= totalCharacters; index++) {
      charIdsArray.push(index);
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

  return {
    isLoading,
    characters,
    totalPaginas,
    pages,
    options,
  };
}
