import "./App.css";
import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { FilmsPage, CharactersPage } from "./Pages/";

function App() {
  return (
    <BrowserRouter>
      <div className="App-body">
        <header className="App-header">
          <ul className="App-header-links">
            <NavLink exact to="/films">
              Films
            </NavLink>
            <NavLink exact to="/characters">
              Characters
            </NavLink>
            <NavLink exact to="/locations">
              Locations
            </NavLink>
          </ul>
        </header>
        <Route path="/films" exact component={FilmsPage}></Route>
        <Route path="/characters" exact component={CharactersPage}></Route>
        <Route path="/locations" exact component={FilmsPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
