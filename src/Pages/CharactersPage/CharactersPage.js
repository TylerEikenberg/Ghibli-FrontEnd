import Icon from "@mdi/react";
import { mdiTrashCanOutline, mdiSquareEditOutline } from "@mdi/js";
import "./CharactersPage.css";
import React, { useEffect, useState } from "react";
import { DataButton, DataDisplay } from "../../Components/";
const axios = require("axios");

/**
 * style everything so it looks cool
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
        `https://ghibli-api-tse.herokuapp.com/people/delete/${currentCharacter._id}`,
        { currentCharacter }
      )
      .then(() => {
        setFetching(true);
        setCurrentCharacter(characters[0]);
      })
      .catch(error => {
        setError(error);
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
        setCharName("Name");
      })
      .catch(error => {
        setError(error);
        setFetching(true);
      });
  };

  const setEditable = async e => {
    e.preventDefault();
    setEditing(true);
    setCharName(currentCharacter.name);
  };

  const updateCharHandle = e => {
    e.preventDefault();

    axios
      .put(
        `https://ghibli-api-tse.herokuapp.com/people/update/${currentCharacter._id}`,
        { name: charName }
      )
      .then(() => {
        setFetching(true);
        setCurrentCharacter(characters[characters.length - 1]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const keyPressHandle = e => {
    if (e.key === "Enter") {
      updateCharHandle(e);
      setEditing(!editing);
    }
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
            <input
              onKeyPress={keyPressHandle}
              type="text"
              placeholder="hi"
              value={charName}
              onChange={e => setCharName(e.target.value)}
            />
          ) : (
            <h1 className="CharacterPage-char-name">{currentCharacter.name}</h1>
          )}
          <div className="CharPage-btns-container">
            <button onClick={deleteClickHandle} className="CharactersPage-btn">
              <Icon
                className="icon"
                path={mdiTrashCanOutline}
                size={1.7}
                color="#e88d67"
              />
            </button>
            <button onClick={setEditable} className="CharactersPage-btn">
              <Icon
                className="icon"
                path={mdiSquareEditOutline}
                size={1.5}
                color="#e88d67"
              />
            </button>
          </div>
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
