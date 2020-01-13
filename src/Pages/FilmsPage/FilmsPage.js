import { DataButton } from "../../Components/";
import React, { useEffect, useState } from "react";
import "./FilmsPage.css";
const axios = require("axios");

function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentFilm, setCurrentFilm] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios(
          "https://ghibli-api-tse.herokuapp.com/films"
        );
        setFilms(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data);
      }
    };
    fetchData();
  }, []);

  const filmClickHandle = data => {
    setCurrentFilm(data);
  };

  return (
    <div>
      <ul className="FilmsPage-films-buttons-container">
        {films.map(item => {
          return (
            <DataButton
              key={item.title}
              data={item}
              clickHandle={filmClickHandle}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
