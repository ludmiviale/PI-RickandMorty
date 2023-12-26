import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
/* styles */
import "./detail.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch(() => {
        console.log("se rompió");
      });
    return () => {
      setCharacter({});
    };
  }, [id]);

  return (
    <div className="detail">
      <h1>{character?.name}</h1>
      <h3>Status: {character?.status}</h3>
      <h3>Species: {character?.species}</h3>
      <h3>Gender: {character?.gender}</h3>
      <h3>Origin: {character?.origin?.name}</h3>
      <img
        src={character?.image}
        alt={character.name}
        style={{ borderRadius: "20px" }}
      />
    </div>
  );
};

export default Detail;
