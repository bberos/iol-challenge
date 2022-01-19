import React from "react";
import CharacterCard from "../CharacterCard";
import { Container, ListContainer } from "./styles";

export default function Characters({ characters }) {
  return (
    <Container>
      <ListContainer>
        {!characters.length >= 1 ? (
          <CharacterCard characterData={characters} />
        ) : (
          characters.map((item) => {
            return <CharacterCard key={item.id} characterData={item} />;
          })
        )}
      </ListContainer>
    </Container>
  );
}
