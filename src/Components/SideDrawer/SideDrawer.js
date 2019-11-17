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
            <button
              type="button"
              class="btn btn-info btn-lg opaque"
              onMouseDown={() => this.props.selectCategory("films")}
            >
              Films
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-info btn-lg opaque"
              onMouseDown={() => this.props.selectCategory("people")}
            >
              Characters
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-info btn-lg opaque"
              onMouseDown={() => this.props.selectCategory("locations")}
            >
              Locations
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-info btn-lg opaque"
              onMouseDown={() => this.props.selectCategory("create")}
            >
              Create a character
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-info btn-lg opaque"
              onMouseDown={() => this.props.selectCategory("delete")}
            >
              Delete a character
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-info btn-lg opaque"
              onMouseDown={() => this.props.selectCategory("update")}
            >
              Update a character
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
