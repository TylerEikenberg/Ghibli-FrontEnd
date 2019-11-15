import React, { Component } from "react";
import "./App.css";
const axios = require("axios");

const filmsUrl = "http://localhost:4000/films";
const peopleUrl = "http://localhost:4000/people";
const locationsUrl = "http://localhost:4000/locations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfFilms: {},
      listOfPeople: {},
      listofLocations: {}
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
        console.log(this.state.listOfPeople);
      });
      /*
       *  setState of listOfLocations to data from locationsUrl
       */
      await axios.get(locationsUrl).then(res => {
        let locationUrlJson = JSON.stringify(res);
        console.log("got locations");
      });
    };

    getAllData().then(() => {});
  }
  render() {
    return (
      <div>
        <header className="app-header">
          <h1 className="app-text">GHIBLI API HEADER</h1>
        </header>
        <ul className="list-group"></ul>
        <footer className="app-footer">
          <h1 className="app-text">GHIBLI API FOOTER</h1>
        </footer>
      </div>
    );
  }
}

export default App;
