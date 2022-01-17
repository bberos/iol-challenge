import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
function CharacterCard({ characterData }) {
  const { id, name, image } = characterData;
  return (
    <Link to={"/character/" + id}>
      <Container>
        <h1>{name}</h1>
        <img className="characterImage" src={image} alt="character-image" />
      </Container>
    </Link>
  );
}

export default CharacterCard;
