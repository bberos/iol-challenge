import React from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "../../context/FavouritesProvider";
import { Container } from "./styles";
import { ReactComponent as PickleFav } from "./../../assets/icons/pickleFav.svg";
function CharacterCard({ characterData }) {
  const { id, name, image } = characterData;
  const { favCharactersIds, storeFavCharactersIds, removeFavCharracterId } =
    useFavourites();

  const checkIfIsFavourite = () =>
    favCharactersIds.some((value) => value === id);

  const handleFavouriteChar = () => {
    if (checkIfIsFavourite()) {
      return removeFavCharracterId(id);
    }
    return storeFavCharactersIds(id);
  };
  return (
    <Container>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: checkIfIsFavourite() ? "red" : "blue",
          cursor: "pointer",
          position: "absolute",
          zIndex: 10,
        }}
        onClick={handleFavouriteChar}
      />
      <PickleFav />
      <Link to={"/character/" + id}>
        <h1>{name}</h1>
        <img className="characterImage" src={image} alt="character-image" />
      </Link>
    </Container>
  );
}

export default CharacterCard;
