import React, { Component } from "react";
import "./App.css";
import List from "./Components/List";

import InfoBox from "./Components/InfoBox/InfoBox";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Overlay from "./Components/Overlay/Overlay";
import CreateBox from "./Components/CreateBox/CreateBox";
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
      listofLocations: [],
      sideDrawerOpen: false,
      filmsOn: true,
      peopleOn: false,
      locationsOn: false,
      loading: true
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  overlayClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  getCategorySelection = data => {
    if (data === "films") {
      this.setState({ filmsOn: true, peopleOn: false, locationsOn: false });
    }
    if (data === "people") {
      this.setState({ peopleOn: true, filmsOn: false, locationsOn: false });
    }
    if (data === "locations") {
      this.setState({ locationsOn: true, filmsOn: false, peopleOn: false });
    }
  };

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
        this.setState({ listofLocations: ghibliLocations, loading: false });
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
    let overlay;
    let infoBox;

    if (this.state.sideDrawerOpen) {
      overlay = <Overlay click={this.overlayClickHandler} />;
    }
    if (this.state.filmsOn) {
      infoBox = <InfoBox infoData={this.state.listOfFilms} />;
    } else if (this.state.peopleOn) {
      infoBox = <InfoBox infoData={this.state.listOfPeople} />;
    } else if (this.state.locationsOn && this.state.listofLocations) {
      infoBox = <InfoBox infoData={this.state.listofLocations} />;
    }
    if (!this.state.loading) {
      return (
        <div>
          <div style={{ height: "100%" }}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer
              show={this.state.sideDrawerOpen}
              selectCategory={this.getCategorySelection.bind(this)}
            />
            {overlay}
          </div>

          <div className="main-window">
            {infoBox}
            <CreateBox />
          </div>

          <footer className="app-footer">
            <a
              href="https://github.com/TylerEikenberg"
              target="_blank"
              className="app-text"
            >
              Made by Tyler Eikenberg
            </a>
            <a
              href="https://ghibli-api-tse.herokuapp.com/"
              target="_blank"
              className="app-text"
            >
              Powered by Studio Ghibli API
            </a>
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
