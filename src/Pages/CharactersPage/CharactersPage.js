import "./CharactersPage.css";
import React, { useEffect, useState } from "react";
import { DataButton, DataDisplay } from "../../Components/";
const axios = require("axios");

/**
 * add way to update characters name
 * add way to add character
 */

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentCharacter, setCurrentCharacter] = useState([]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setDeleting(false);
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
  }, [deleting]);

  const charClickHandle = data => {
    setCurrentCharacter(data);
  };
  const deleteClickHandle = () => {
    axios
      .delete(
        `https://ghibli-api-tse.herokuapp.com/people/delete/${currentCharacter.id}`,
        { currentCharacter }
      )
      .then(response => {
        console.log(response);
        setDeleting(true);
        setCurrentCharacter(characters[0]);
      })
      .catch(error => {
        console.log(error);
        setDeleting(true);
      });
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
        <button
          onClick={deleteClickHandle}
          className="CharactersPage-delete-btn"
        >
          Delete
        </button>
      </DataDisplay>
    </div>
  );
}

export default CharactersPage;
