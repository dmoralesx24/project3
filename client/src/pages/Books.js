import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import MuscleList from "../components/MuscleList";
import "../styles/home.css";
import Footer from "../components/Footer"


class Books extends Component {
  state = {
    books: [],
    title: "",
    link: "",
    muscle: "",
    equipment: "",
    hide: false
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getExercises()
      .then(res => {
        this.setState({
          books: res.data,
          title: "",
          link: "",
          muscle: "",
          equipment: ""
        });
      })
      .catch(err => console.log(err));
  };

  // for hiding exercise when clicked saved to workout
  // hidingCard = () => {
  //   if(this.state.hide == true) {
  //     this.
  //   }
  // }

  saveExercise = (id, title, link, muscle, equipment) => {
    API.saveExercise(id, title, link, muscle, equipment)
      .then(res => console.log(res.data), this.loadBooks(), this.setState({
        hide: true
      }))
      .catch(err => console.log(err));
  };

  // getExercise = () => {
  //   API.getExercise(muscle)
  //   .then(res => this.loadBooks())
  //   .catch(err => console.log(err));
  // }


  handleMuscleTarget = event => {
    event.preventDefault();
    if (this.state.muscle) {
      API.getExercise();
    }
  };

  render() {
    return (
      <div className="background-page">
        <Container fluid>
          <Row>
            <Col size="sm-3">
              <Jumbotron>
                <h1>Muscle Group</h1>
              </Jumbotron>
              <MuscleList />
              {/* <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn> */}
            </Col>
            <Col size="md-9">
              <Jumbotron>
                <h1>Exercises</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book, index) => (
                    <ListItem key={index}>
                      <a href={"https://www.bodybuilding.com/" + book.link}>
                        <h2>{book.title}</h2>
                        <h5>Muscle Target : {book.muscle}</h5>
                        <h5>Equipment : {book.equipment}</h5>
                      </a>
                      <SaveBtn
                        onClick={() =>
                          this.saveExercise(
                            book._id,
                            book.title,
                            book.link,
                            book.muscle,
                            book.equipment
                          )
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Books;
