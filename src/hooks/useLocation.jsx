import { useState, useEffect } from "react";
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

  // Get all locations from api/location.
  useEffect(() => {
    fetchLocations();
  }, []);

  // If is a filter by location make the split strings function and paginate.
  // Repeated if change the location or page change.
  useEffect(() => {
    if (selectedLocation !== undefined) {
      splitByLocationIds();
      pageDataByLocation();
    }
  }, [selectedLocation, page]);

  //Save options value and label for react-select library & residents for split the strings.
  const fetchLocations = async () => {
    let locations = await getLocations();
    setLocations(locations.results);
    setIsLoading(false);
    let options = locations.results.map((e) => {
      return {
        value: e.id,
        label: e.name,
        residents: e.residents,
      };
    });
    setOptions(options);
  };

  // This function split the strings obtain in fetchLocation.
  // If it's 3 digit id is 45 characters, 2 digit 44 and 1 digit 43.
  // Then divider for paginate.
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

  // Divide the array of ids in pages with the limit prop.
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

  //Need join the array for fetch.
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
