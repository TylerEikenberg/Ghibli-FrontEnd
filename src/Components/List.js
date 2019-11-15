import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li class="list-group-item">
        {this.props.name} || {this.props.title}
      </li>
    );
  }
}
