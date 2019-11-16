import React, { Component } from "react";
import "./Toolbar.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div></div>
          <div className="toolbar-logo">
            <h1>LOGO</h1>
          </div>
          <div className="toolbar-navigation-items">
            <ul>
              <li>
                <a href="#">Films</a>
              </li>
              <li>
                <a href="#">People</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
