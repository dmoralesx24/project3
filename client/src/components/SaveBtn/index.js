import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <button type="button" className="btn btn-dark" {...props}>
      Add to Workout!
    </button>
  );
}

export default SaveBtn;
