import "./CharactersPage.css";
import React, { useEffect, useState } from "react";
import { DataButton, DataDisplay } from "../../Components/";
const axios = require("axios");

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentCharacter, setCurrentCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios(
          "https://ghibli-api-tse.herokuapp.com/people"
        );
        setCharacters(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data);
      }
    };
    fetchData();
  }, []);

  const charClickHandle = data => {
    setCurrentCharacter(data);
  };

  return (
    <div className="CharacterPage-page-container">
      <h1>{loading ? "Loading" : null}</h1>
      <ul className="CharacterPage-chars-buttons-container">
        {characters.map(item => {
          return (
            <DataButton
              key={item.title}
              data={item}
              clickHandle={charClickHandle}
            />
          );
        })}
      </ul>
      <DataDisplay>
        <h1 className="CharacterPage-char-name">{currentCharacter.name}</h1>
        <button className="CharactersPage-delete-btn">Delete</button>
      </DataDisplay>
    </div>
  );
}

export default CharactersPage;
