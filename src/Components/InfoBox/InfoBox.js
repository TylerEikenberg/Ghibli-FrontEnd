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
  };

  render() {
    // console.log(typeof this.state.data.people);
    return (
      <div className="info-box-container">
        <div className="film-list">
          <ul className="list-group">
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
          <h1 className="infobox-detail">
            {this.state.data.title || this.state.data.name}
          </h1>
          <h3 className="infobox-detail">
            {this.state.data.director ||
              this.state.data.gender ||
              this.state.data.terrain}
          </h3>
          <h3 className="infobox-detail">
            {this.state.data.producer || this.state.data.id}
          </h3>
          <h4 className="infobox-detail">
            {this.state.data.release_date || this.state.data.climate}
          </h4>
          <p className="infobox-detail">{this.state.data.description}</p>

          {this.state.data.people
            ? this.state.data.people.map(item => {
                return <h5 className="infobox-detail">{item.name}</h5>;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default InfoBox;
