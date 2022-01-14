import React from "react";
import { Container } from "./styles";
function CharacterCard({ characterData }) {
  const { name, image, status, species, origin, location } = characterData;
  return (
    <Container>
      <h1>{name}</h1>
      <img className="characterImage" src={image} alt="character-image" />
      <h2>Status: {status}</h2>
      <h2>Specie: {species}</h2>
      <h2>Origin: {origin.name}</h2>
      <h2>Location: {location.name}</h2>
    </Container>
  );
}

export default CharacterCard;
