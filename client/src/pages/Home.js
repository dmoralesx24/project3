import React from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import images from "../Images/logo2.jpg";
import "../styles/home.css";
import Footer from "../components/Footer"



function HomePage() {
  return (
    <div>
      <div className="jumbotron text-center">
        <div className="overlay" />
        <div className="background-image" />
        <div className="caption">
          <h1>Welcome To</h1>
          <img
            style={{
              height: 300,
              width: 250,
              clear: "both",
              textAlign: "center"
            }}
            src={images}
            alt="logo"
          />
          <h1 id="title">Fitness Journey</h1>
        </div>
      </div>
      <div className="container1">
        <Container>
        <br/>
          <Row>
            <Col size="md-12">
              <h1 className="containerText">The Advantages</h1>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col size="md-12">
              <h5 className="containerText">Fitness Journey is an online web application that allows you to search a huge database of exercises to create and manage a workout routine. You'll also be able to create a nutrion plan for yourself and keep track of your body mass index as well as your weight and be able to create goals.</h5>
              <h3 className="containerText">Start your Fitness Journey here!</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col size="md-4">
              <h3 className="containerText">Workout</h3>
            </Col>
            <Col size="md-4">
              <h3 className="containerText">Nutrition</h3>
            </Col>
            <Col size="md-4">
              <h3 className="containerText">Goals</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
