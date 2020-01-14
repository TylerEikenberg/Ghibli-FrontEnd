import { DataButton, DataDisplay } from "../../Components/";
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
    <div className="FilmsPage-page-container">
      <h1>{loading ? "Loading" : null}</h1>
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
      <DataDisplay>
        <h1 className="FilmsPage-film-title">{currentFilm.title}</h1>
        <h1 className="FilmsPage-film-details">{currentFilm.release_date}</h1>
        <h3 className="FilmsPage-film-details">
          Directed By {currentFilm.director}
        </h3>
        <h3 className="FilmsPage-film-details">
          Produced By {currentFilm.producer}
        </h3>
        <hr className="FilmsPage-hrline" />
        <h2 className="FilmsPage-film-details">{currentFilm.description}</h2>
      </DataDisplay>
    </div>
  );
}

export default FilmsPage;
