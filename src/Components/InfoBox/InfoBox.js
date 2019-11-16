import React, { Component } from "react";
import "./InfoBox.css";
import List from "../List";

class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getChildData = info => {
    this.setState({ data: info });
    console.log(this.state.data);
  };

  render() {
    // console.log(this.props.infoData);
    return (
      <div className="info-box-container">
        <div className="film-list">
          <ul className="list-group position-absolute">
            {this.props.infoData.map(item => {
              return (
                <List
                  key={item.id}
                  {...item}
                  setData={this.getChildData.bind(this)}
                />
              );
            })}
          </ul>
        </div>
        <div className="ghibli-detail-container">
          <h1>{this.state.data.title}</h1>
          <h3>{this.state.data.director}</h3>
          <h3>{this.state.data.producer}</h3>
          <h4>{this.state.data.release_date}</h4>
          <p>{this.state.data.description}</p>
          <p>{this.state.data.people}</p>
        </div>
      </div>
    );
  }
}

export default InfoBox;
