import React, { Component } from "react";
import "./style.css";

class MuscleList extends Component {

    // handleMuscleTarget = event => {
    //     event.preventDefault();
    //     if (this.state.muscle) {
    //       API.getExercise()
    //     }
    //   }

    render() {
        return (
            <div className="card">
              <div className="card-body">
                <ul className="card-text" >
                    <li>
                        <a href="/books/chest" defaultValue="chest">
                            Chest
                        </a>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Forearms
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Lats
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Middle Back
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Lower Back
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Neck
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Quadriceps
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Hamstrings
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Calves
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Triceps
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Traps
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Shoulders
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Abdominals
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Glutes
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Biceps
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Adductors
                        </label>
                    </li>
                    <br/>
                    <li>
                        <label >
                            Abductors
                        </label>
                    </li>
                </ul>
              </div>
            </div>
        );
    }
}

export default MuscleList