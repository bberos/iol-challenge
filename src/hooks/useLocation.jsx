import React, { useState, useEffect } from "react";
import { getLimitCharacters, getLocations } from "../services/request";

export default function useLocation(props) {
  const {
    selectedLocation,
    page,
    limit,
    pages,
    actualPageIds,
    setIsLoading,
    setTotalCharacters,
    setActualPageIds,
    setCharacters,
  } = props;

  const [locations, setLocations] = useState();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetchLocations();
  }, []);
  useEffect(() => {
    if (selectedLocation !== undefined) {
      splitByLocationIds();
      pageDataByLocation();
    }
  }, [selectedLocation, page]);

  const fetchLocations = async () => {
    console.log("entra en options");
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
  const splitByLocationIds = () => {
    let resultsLocationIds = [];
    setTotalCharacters(selectedLocation.residents.length);
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
  };
  const fetchCaractersByLocation = async () => {
    const charactersData = await getLimitCharacters(actualPageIds);
    setCharacters(charactersData);
    setIsLoading(false);
  };
  return { fetchLocations, options };
}
