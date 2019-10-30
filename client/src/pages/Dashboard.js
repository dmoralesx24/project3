import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { DashList } from "../components/DashList";
import Modal from "../components/Modal";
import "../styles/home.css";
import Footer from "../components/Footer"

class Dashboard extends Component {
  state = {
    // this is for workout state
    workouts: [],
    title: "",
    link: "",
    muscle: "",
    equipment: "",
    show: false,
    id: "",
    // this is for the note state
    sets: "",
    reps: "",
    body: "",
    note: [],
    noteId: ""
  };

  componentDidMount() {
    this.loadWorkouts();
    // this.loadNotes();
  }

  // for showing modal
  showModal = (event, id) => {
    console.log(event);
    console.log(id);

    this.setState({
      show: !this.state.show,
      id: id
    });

      API.grabNote(id).then(res =>  {
        console.log(res)
        if(!res.data.note) {
          this.setState({
            note: "",
            sets: "",
            reps: "",
            body: ""
          })
        } else {
          this.setState({
            note: res.data.note,
            sets: res.data.note.sets,
            reps: res.data.note.reps,
            body: res.data.note.body
          })
        }
      }
      )
 
  };

  logoutHandle = event => {
    event.preventDefault();

    API.SignOut()
    .then(this.props.history.push("/users/login"));
  }

 
  loadWorkouts() {
    API.getWorkouts()
      .then(res => {
        this.setState({
          // exercise state
          workouts: res.data,
          title: "",
          link: "",
          muscle: "",
          equipment: "",
          id: "",
          // this is for the note state
          note: ""
        });
      })
      .catch(err => console.log(err));
  }

  deleteWorkout = id => {
    API.deleteWorkout(id)
      .then(res => this.loadWorkouts())
      .catch(err => console.log(err));
  };


  render() {
    const jsonData = JSON.parse(this.props.location.state);
    const dataArr = [];
    dataArr.push(jsonData);
    // const anotherData = dataArr.filter(data => data === "data")
    // console.log("anotherData", anotherData)
    return (
      <div className="background-page">
        <div className="container1">
        <button
            type="button"
            className="btn btn-dark log-out"
            onClick={this.logoutHandle}
          >
            Log Out
          </button>
          <h1 id="dashText">Dashboard</h1>
        </div>
        <Modal
          show={this.state.show}
          id={this.state.id}
          note={this.state.note}
          sets={this.state.sets}
          reps={this.state.reps}
          body={this.state.body}
        />
        <Container fluid>
          <Row>
            <Col size="sm-3">
              {dataArr.map((data, index) => (
                <Jumbotron id="userJumbo" key={index}>
                  <h3 id="welcome" style={{ fontSize: 40 }}>
                    Welcome
                  </h3>
                  <h1 id="userNames" style={{ fontSize: 70 }}>
                    {data.data.name}
                  </h1>
                </Jumbotron>
              ))}
              <DashList />
            </Col>
            <Col size="md-9">
              <Jumbotron>
                <h1>Workouts</h1>
              </Jumbotron>
              {this.state.workouts.length ? (
                <List>
                  {this.state.workouts.map((workout, index) => (
                    <ListItem key={index}>
                      <a href={"https://www.bodybuilding.com/" + workout.link}>
                        <h2>{workout.title}</h2>
                        <h5>Muscle Target : {workout.muscle}</h5>
                        <h5>Equipment : {workout.equipment}</h5>
                      </a>
                      <br/>
                      <button
                        type="button"
                        className="btn btn-dark create-note"
                        onClick={event => {
                          this.showModal(event, workout._id);
                        }}
                      >
                        Create Note
                      </button>
                      <DeleteBtn
                        onClick={() => this.deleteWorkout(workout._id)}
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Workouts to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Dashboard;
