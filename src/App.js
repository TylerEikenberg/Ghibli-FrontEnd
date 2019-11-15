import React, { Component } from "react";
import "./App.css";
import List from "./Components/List";
import InfoBox from "./Components/InfoBox/InfoBox";
const axios = require("axios");

const filmsUrl = "http://localhost:4000/films";
const peopleUrl = "http://localhost:4000/people";
const locationsUrl = "http://localhost:4000/locations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfFilms: [],
      listOfPeople: [],
      listofLocations: []
    };
  }

  componentDidMount() {
    const getAllData = async () => {
      /*
       *  setState of listOfFilms to data from filmsUrl
       */
      await axios.get(filmsUrl).then(res => {
        let filmsUrlData = res;
        const ghibliFilms = filmsUrlData.data.map(item => {
          const film = {};
          film.id = item.id;
          film.description = item.description;
          film.director = item.director;
          film.title = item.title;
          film.producer = item.producer;
          film.release_date = item.release_date;
          film.url = item.url;
          film.locations = item.locations;
          film.people = item.people;
          return film;
        });
        this.setState({ listOfFilms: ghibliFilms });
        console.log("got films");
      });
      /*
       *  setState of listOfPeople to data from peopleUrl
       */
      await axios.get(peopleUrl).then(res => {
        let peopleUrlData = res;
        const ghibliPeople = peopleUrlData.data.map(item => {
          const people = {};
          people.id = item.id;
          people.name = item.name;
          people.gender = item.gender;
          people.films = item.films;
          people.url = item.url;
          return people;
        });
        this.setState({ listOfPeople: ghibliPeople });
        console.log("got people");
      });
      /*
       *  setState of listOfLocations to data from locationsUrl
       */
      await axios.get(locationsUrl).then(res => {
        let locationUrlData = res;
        const ghibliLocations = locationUrlData.data.map(item => {
          const location = {};
          location.id = item.id;
          location.name = item.name;
          location.climate = item.climate;
          location.terrain = item.terrain;
          location.films = item.films;
          location.ulr = item.url;
          return location;
        });
        this.setState({ listOfLocations: ghibliLocations });
        console.log("got locations");
      });
    };

    getAllData();
  }

  /**
   * TODO
   * LOOP THROUGH FILMS AND CREATE LIST ITEM OF EACH ONE
   */
  render() {
    if (this.state.listOfFilms) {
      return (
        <div>
          <div>
            <header className="app-header">
              <h1 className="app-text">GHIBLI API HEADER</h1>
            </header>
          </div>

          <div className="main-window">
            <InfoBox infoData={this.state.listOfFilms} />
          </div>

          <footer className="app-footer">
            <h1 className="app-text">GHIBLI API FOOTER</h1>
          </footer>
        </div>
      );
    }

    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default App;
