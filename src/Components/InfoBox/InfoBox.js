import React, { Component } from "react";
import "./InfoBox.css";
import List from "../List";

class InfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.infoData);
    return (
      <div className="info-box-container">
        <div className="film-list">
          <ul className="list-group position-absolute">
            {this.props.infoData.map(item => {
              return <List key={item.id} {...item} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default InfoBox;
