import "./App.css";
import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { FilmsPage } from "./Pages/";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="App-header">Hello header</header>
        <Route path="/" exact component={FilmsPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
