import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <li className="list-group-item">{this.props.name || this.props.title}</li>
    );
  }
}

export default List;
