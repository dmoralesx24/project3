import React from "react";
import "./style.css"

export function DashList(props) {
  return (
    <div className="card">
      <div className="card-body">
        <ul className="card-text">
          <li>
            <a href="/dashboard" defaultValue="chest" {...props}>
              <h3>Workout</h3>
            </a>
          </li>
          <br/>
          <br/>
          <li>
            <a href="/bmi"  {...props}>
              <h3>Body Mass Index</h3>
            </a>
          </li>
          <br/>
          <br/>
          <li>
            <a href="/goals"  {...props}>
              <h3>Goals</h3>
            </a>
          </li>
          <br/>
          <br/>
          <li>
            <a href="/nutrition" {...props}>
              <h3>Nutrition</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
