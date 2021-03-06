import React, { useContext, createContext, useState } from "react";
const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);
export default function FavouritesProvider({ children }) {
  const [favCharactersIds, setFavCharactersIds] = useState(() =>
    JSON.parse(window.localStorage.getItem("@favourites_characters") || "[]")
  );
  const [isFavouritePage, setIsFavouritePage] = useState(false);

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
        isFavouritePage,
        setIsFavouritePage,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
