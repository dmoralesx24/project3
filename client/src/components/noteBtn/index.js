import React from "react";
// import "./style.css"

function NoteBtn(props) {
    return (
      <a className="btn save-btn" {...props} role="button" tabIndex="0">
        Add Note
      </a>
    );
  }

  export default NoteBtn;