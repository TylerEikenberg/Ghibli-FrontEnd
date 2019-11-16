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
            <a href="#">Films</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
