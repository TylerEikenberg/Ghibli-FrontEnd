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
    axios.get(filmsUrl).then(res => {
      let filmsUrlJson = JSON.stringify(res);
      console.log(filmsUrlJson);
    });
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
