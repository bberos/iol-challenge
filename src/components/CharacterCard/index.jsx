import React from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "../../context/FavouritesProvider";
import { Container, Head, HeadContainer } from "./styles";
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
      <Head>
        <HeadContainer style={{ display: "flex", alignItems: "center" }}>
          <div className="nameContainer">
            <h1>{name}</h1>
          </div>
          <PickleFav
            onClick={handleFavouriteChar}
            width="25px"
            height="30px"
            fill={checkIfIsFavourite() ? "#06750e" : "#fdfdfdda"}
            className="icon"
          />
        </HeadContainer>
      </Head>
      <Link to={"/character/" + id} style={{ cursor: "pointer" }}>
        <img className="characterImage" src={image} alt="character-image" />
      </Link>
    </Container>
  );
}

export default CharacterCard;
