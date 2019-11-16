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
            <button>Films</button>
          </li>
          <li>
            <button>People</button>
          </li>
          <li>
            <button>Locations</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
