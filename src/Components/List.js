import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };

    this.isMouseHover = this.isMouseHover.bind(this);
  }

  isMouseHover = () => {
    if (!this.state.isHover) {
      this.setState({ isHover: true });
    }
    if (this.state.isHover) {
      this.setState({ isHover: false });
    }
  };

  render() {
    const activeClass = this.state.isHover
      ? "list-group-item active"
      : "list-group-item";
    return (
      <li
        className={activeClass}
        onMouseEnter={this.isMouseHover}
        onMouseLeave={this.isMouseHover}
      >
        {this.props.name || this.props.title}
      </li>
    );
  }
}

export default List;
