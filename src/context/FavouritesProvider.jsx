import React, { useContext, createContext, useState, useEffect } from "react";
const FavouritesContext = createContext();
export const useFavourites = () => useContext(FavouritesContext);
export default function FavouritesProvider({ children }) {
  const [favCharactersIds, setFavCharactersIds] = useState(() =>
    JSON.parse(window.localStorage.getItem("@favourites_characters") || "[]")
  );
  const getFavouritesData = async () => {
    // try {
    //   const jsonValue = JSON.parse(
    //     window.localStorage.getItem("@favourites_characters") || "[]"
    //   );
    //   setFavCharactersIds(jsonValue);
    // } catch (e) {
    //   console.log(e);
    // }
  };
  useEffect(() => {
    getFavouritesData();
  });

  const storeFavCharactersIds = (charId) => {
    try {
      const newFavourite = [...favCharactersIds, charId];
      const jsonValue = JSON.stringify(newFavourite);
      window.localStorage.setItem("@favourites_characters", jsonValue);
      setFavCharactersIds(newFavourite);
    } catch (e) {
      console.log(e);
    }
  };

  const removeFavCharracterId = (charId) => {
    const newFavourite = favCharactersIds.filter((item) => item !== charId);
    const jsonValue = JSON.stringify(newFavourite);
    window.localStorage.setItem("@favourites_characters", jsonValue);
    setFavCharactersIds(newFavourite);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favCharactersIds,
        storeFavCharactersIds,
        removeFavCharracterId,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
