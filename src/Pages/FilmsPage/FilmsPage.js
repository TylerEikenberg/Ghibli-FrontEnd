import React, { useEffect, useState } from "react";
const axios = require("axios");

function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentFilm, setCurrentFilm] = useState(null);

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

  console.log(films);

  return (
    <div>
      <ul>
        {films.map(item => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
