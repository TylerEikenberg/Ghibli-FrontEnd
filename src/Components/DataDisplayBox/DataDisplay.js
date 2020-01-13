import React from "react";
import "./DataDisplay.css";

function DataDisplay(props) {
  return <div className="DataDisplay-container">{props.children}</div>;
}

export default DataDisplay;
