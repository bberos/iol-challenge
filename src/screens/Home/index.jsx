import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import { getAllCharactersList } from "../../services/request";
// import characters from "./../../assets/characters.json";
import { Container, ListContainer } from "./styles";
export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCharacters = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const charactersData = await getAllCharactersList();
    setCharacters(charactersData.results);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCharacters();
  }, [characters]);
  return (
    <Container>
      <h1>Personajes</h1>
      <ListContainer>
        {characters.map((item) => {
          return <CharacterCard characterData={item} />;
        })}
      </ListContainer>
    </Container>
  );
}
