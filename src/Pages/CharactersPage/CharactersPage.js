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
  const [fetching, setFetching] = useState(false);
  const [charName, setCharName] = useState("Name");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setFetching(false);
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
  }, [fetching]);

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
        setFetching(true);
        setCurrentCharacter(characters[0]);
      })
      .catch(error => {
        console.log(error);
        setFetching(true);
      });
  };

  const submitCharHandle = async e => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://ghibli-api-tse.herokuapp.com/people/create", {
        name: charName,
        gender: ""
      })
      .then(() => {
        setFetching(true);
        setCurrentCharacter(characters[characters.length - 1]);
      })
      .catch(error => {
        setFetching(true);
      });
  };

  const editCharHandle = async e => {
    e.preventDefault();
    setEditing(true);
  };

  return (
    <div className="CharacterPage-page-container">
      <h1>{loading ? "Loading" : null}</h1>
      <div className="CharPage-chars-infobox-container">
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
          {editing ? (
            <input type="text" placeholder="hi" value={currentCharacter.name} />
          ) : (
            <h1 className="CharacterPage-char-name">{currentCharacter.name}</h1>
          )}
          <button
            onClick={deleteClickHandle}
            className="CharactersPage-delete-btn"
          >
            Delete
          </button>
          <button
            onClick={editCharHandle}
            className="CharactersPage-delete-btn"
          >
            Edit
          </button>
        </DataDisplay>
      </div>

      <form onSubmit={submitCharHandle} className="CharPage-create-form">
        <label>Create Character</label>
        <input
          type="text"
          placeholder="Name"
          value={charName}
          onChange={e => setCharName(e.target.value)}
        />
        <input type="submit" placeholder="Create" value="Submit" />
      </form>
    </div>
  );
}

export default CharactersPage;
