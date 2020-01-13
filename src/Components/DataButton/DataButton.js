import React from "react";
import "./DataButton.css";

function DataButton({ data = [], clickHandle = null }) {
  return (
    <div onClick={() => clickHandle(data)} className="DataButton-wrapper">
      {data.title}
    </div>
  );
}

export default DataButton;
