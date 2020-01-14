import { DataButton, DataDisplay } from "../../Components/";
import React, { useEffect, useState } from "react";
import "./LocationsPage.css";
const axios = require("axios");

function LocationsPage() {
  const [locations, setlocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentlocation, setCurrentlocation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios(
          "https://ghibli-api-tse.herokuapp.com/locations"
        );
        setlocations(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data);
      }
    };
    fetchData();
  }, []);

  const filmClickHandle = data => {
    setCurrentlocation(data);
  };

  return (
    <div className="FilmsPage-page-container">
      <h1>{loading ? "Loading" : null}</h1>
      <ul className="FilmsPage-films-buttons-container">
        {locations.map(item => {
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
        <h1 className="FilmsPage-film-title">{currentlocation.name}</h1>
        <hr className="FilmsPage-hrline" />

        <h3 className="FilmsPage-film-details">
          Climate: {currentlocation.climate}
        </h3>
        <h3 className="FilmsPage-film-details">
          Terrain: {currentlocation.terrain}
        </h3>
      </DataDisplay>
    </div>
  );
}

export default LocationsPage;
