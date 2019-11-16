import React, { Component } from "react";
import "./Overlay.css";

class Overlay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="overlay" onClick={this.props.click} />;
  }
}

export default Overlay;
