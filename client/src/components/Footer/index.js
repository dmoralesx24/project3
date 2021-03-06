import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Fitness Journey</p>
      </div>
    </footer>
  );
}

export default Footer;
