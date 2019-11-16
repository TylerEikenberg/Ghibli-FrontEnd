import React, { Component } from "react";
import "./DrawerToggle.css";
class DrawerToggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="toggle-button">
        <div className="toggle-line" />
        <div className="toggle-line" />
        <div className="toggle-line" />
      </button>
    );
  }
}

export default DrawerToggle;
