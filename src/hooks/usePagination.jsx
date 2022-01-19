import React, { useEffect, useState } from "react";
import { getAllCharactersList, getLimitCharacters } from "../services/request";
import useLocation from "./useLocation";

export default function usePagination({
  limit,
  selectedLocation,
  isFavouritePage,
  totalFavChars,
  favCharactersIds,
}) {
  const [page, setPage] = useState(1);
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

  // If is HomeScreen fetch total number of character count and save in the state.
  // If is FavouriteScreen save in state the count of localStorage data.
  useEffect(() => {
    {
      !isFavouritePage
        ? fetchNumberOfCharacters()
        : setTotalCharacters(totalFavChars);
    }
  }, []);

  // Execute this if totalCharacters fetch is success.
  // If is HomeScreen use arrayMaker.
  // If is not a filter location query make the pagination.
  // Execute this if the totalCharacters or page change or if add/remove some favourite character.
  useEffect(() => {
    if (totalCharacters !== undefined) {
      {
        !isFavouritePage && arrayMaker();
      }
      arrayDivider();
      if (selectedLocation === undefined) {
        pageData();
      }
    }
  }, [totalCharacters, page, favCharactersIds]);

  useEffect(() => {
    fetchCharacters();
  }, [actualPageIds]);

  const fetchNumberOfCharacters = async () => {
    const charactersData = await getAllCharactersList();
    setTotalCharacters(charactersData.info.count);
    setIsLoading(false);
  };

  // Function to create array with the total characters count. Ex: totalCount 3 return [1,2,3].
  const arrayMaker = () => {
    for (let index = 1; index <= totalCharacters; index++) {
      charIdsArray.push(index);
    }
  };

  // Fuction to divide the characters ids in pages depend of the limit of results and update pages object.
  const arrayDivider = (
    data = !isFavouritePage ? charIdsArray : favCharactersIds
  ) => {
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
    console.log("entra al fetch");
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
    page,
    setPage,
  };
}
