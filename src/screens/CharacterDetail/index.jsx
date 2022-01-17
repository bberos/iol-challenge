import React, { useEffect, useState } from "react";
import { getCharacter } from "../../services/request";
import { useParams, useNavigate } from "react-router-dom";
export default function CharacterDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const navigate = useNavigate();
  const chId = useParams();
  const fetchCharacter = async () => {
    const characterData = await getCharacter(chId.id);
    setCharacter(characterData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCharacter();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <div>
          <h1>Nombre:{character.name} </h1>
          <img src={character.image} alt="photo" />
          <h1>Estado:{character.status} </h1>
          <h1>Origen:{character.origin.name} </h1>
          <h1>Locacion:{character.location.name} </h1>
          <button onClick={() => navigate(-1)}>Volver</button>
        </div>
      )}
    </div>
  );
}
