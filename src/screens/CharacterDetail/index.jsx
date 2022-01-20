import React, { useEffect, useState } from "react";
import { getCharacter } from "../../services/request";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  CardContainer,
  ImageContainer,
  InfoContainer,
} from "./styles";
import { useFavourites } from "../../context/FavouritesProvider";
export default function CharacterDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const { setIsFavouritePage } = useFavourites();

  const chId = useParams();
  const fetchCharacter = async () => {
    const characterData = await getCharacter(chId.id);
    setCharacter(characterData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCharacter();
    setIsFavouritePage(true);
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <Container>
          <CardContainer
            style={{
              borderColor:
                character.status === "Dead"
                  ? "#b73939"
                  : "hsl(72, 71%, 56%, 0.8)",
            }}
          >
            <ImageContainer>
              <img
                className="image"
                src={character.image}
                alt="photo"
                style={{
                  borderRadius: "20px",
                  filter: character.status === "Dead" ? "grayscale(1)" : "none",
                }}
              />
            </ImageContainer>
            <InfoContainer>
              <h1>
                <b>Nombre</b>: {character.name}
              </h1>
              <h1>
                <b>Origen</b>: {character.origin.name}
              </h1>
              <h1>
                <b>Locacion</b>: {character.location.name}
              </h1>
              <h1>
                <b>Estado</b>: {character.status}
              </h1>
            </InfoContainer>
          </CardContainer>
        </Container>
      )}
    </div>
  );
}
