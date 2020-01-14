import "./App.css";
import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { FilmsPage, CharactersPage, LocationsPage } from "./Pages/";

function App() {
  return (
    <BrowserRouter>
      <div className="App-body">
        <header className="App-header">
          <ul className="App-header-links">
            <NavLink className="App-link" exact to="/films">
              Films
            </NavLink>
            <NavLink className="App-link" exact to="/characters">
              Characters
            </NavLink>
            <NavLink className="App-link" exact to="/locations">
              Locations
            </NavLink>
          </ul>
        </header>
        <Route path="/films" exact component={FilmsPage}></Route>
        <Route path="/characters" exact component={CharactersPage}></Route>
        <Route path="/locations" exact component={LocationsPage}></Route>
        <footer className="App-footer">
          <a
            href="https://tylereikenberg.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            {" "}
            Tyler Eikenberg
          </a>{" "}
          |{" "}
          <a
            href="https://ghibli-api-tse.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            {" "}
            Studio Ghibli API
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
