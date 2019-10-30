import React, { Component } from "react";
// import "./style.css";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";
// import { Modal, Button } from 'react-bootstrap'
import "./style.css";
// import NoteList from "../NoteList";

class Modal extends Component {
  state = {
    sets: "",
    reps: "",
    body: "",
    note: [],
    id: "",
    sent: false,
    message: "",
    show: false
  };

  // componentDidMount = () => {
  //   Typical usage, don't forget to compare the props

  //   if (!this.state.note.length) {
  //     return this.setState({
  //       message: "No notes for this exercise"
  //     })
  //   }

  //   this.loadNotes();
  // };

  // loadNotes = () => {
  //   // console.log(id)
  //   API.grabNote(this.props.id)
  //     .then(res =>
  //       this.setState({
  //         note: [res.data.note],
  //         sets: "",
  //         reps: "",
  //         body: "",
  //         sent: false
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };
  // NoteCallBack = id => {

  // }

  // onClose = event => {
  //   this.props.onClose && this.props.onClose(event);
  // };

  oncloseTwo = event => {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".clear-note").innerHTML = ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.reps && this.state.sets) {
      // console.log(this.props.id);
      API.createNote(
        this.props.id,
        this.state.sets,
        this.state.reps,
        this.state.body
      )
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

      this.setState({
        sets: "",
        reps: "",
        body: ""
      });
    }
    this.oncloseTwo();
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div className="modal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Exercise Note</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.oncloseTwo}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <hr />
              <div>
                <ul>
                  <li className="clear-note"><h5>Sets: {this.props.sets}</h5></li>
                  <li className="clear-note"><h5>Reps: {this.props.reps}</h5></li>
                  <li className="clear-note"><h5>Goals: {this.props.body}</h5></li>
                </ul>
              </div>
              <hr />
              <div className="modal-body">
                <form>
                  <Input
                    value={this.state.sets}
                    onChange={this.handleInputChange}
                    name="sets"
                    placeholder="Sets (required)"
                  />
                  <Input
                    value={this.state.reps}
                    onChange={this.handleInputChange}
                    name="reps"
                    placeholder="Reps (required)"
                  />
                  <TextArea
                    style={{ height: 100 }}
                    value={this.state.body}
                    onChange={this.handleInputChange}
                    name="body"
                    placeholder="Goal (Optional)"
                  />
                </form>
              </div>
              <div className="modal-footer">
                <FormBtn
                  disabled={!(this.state.sets && this.state.reps)}
                  onClick={this.handleFormSubmit}
                >
                  Save Note
                </FormBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
