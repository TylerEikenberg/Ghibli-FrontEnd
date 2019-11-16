import React, { Component } from "react";
import "./SideDrawer.css";
class SideDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <button onMouseDown={() => this.props.selectCategory("films")}>
              Films
            </button>
          </li>
          <li>
            <button onMouseDown={() => this.props.selectCategory("people")}>
              People
            </button>
          </li>
          <li>
            <button onMouseDown={() => this.props.selectCategory("locations")}>
              Locations
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
