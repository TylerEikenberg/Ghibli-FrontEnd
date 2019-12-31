import React, { Component } from "react";
import "./Toolbar.css";
import DrawerToggle from "../SideDrawer/DrawerToggle";

class Toolbar extends Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div>
            <DrawerToggle click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar-logo">
            <h1>Studio Ghibli API</h1>
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
