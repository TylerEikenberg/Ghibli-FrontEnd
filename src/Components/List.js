import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      didMouseClick: false,
      isHover: false
    };

    this.isMouseHover = this.isMouseHover.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
  }

  isMouseHover = () => {
    if (!this.state.isHover) {
      this.setState({ isHover: true });
    }
    if (this.state.isHover) {
      this.setState({ isHover: false });
    }
  };

  onMouseClick = () => {
    console.log("hello");
  };

  render() {
    const activeClass = this.state.isHover
      ? "list-group-item active"
      : "list-group-item";
    return (
      <div className="list-component-container">
        <li
          className={activeClass}
          onMouseEnter={this.isMouseHover}
          onMouseLeave={this.isMouseHover}
          onMouseDown={() => this.props.setData(this.props)}
        >
          {this.props.name || this.props.title}
        </li>
      </div>
    );
  }
}

export default List;
