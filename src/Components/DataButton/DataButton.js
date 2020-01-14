import React from "react";
import "./DataButton.css";

function DataButton({ data = [], clickHandle = null }) {
  return (
    <div onClick={() => clickHandle(data)} className="DataButton-wrapper">
      {data.title || data.name}
    </div>
  );
}

export default DataButton;
