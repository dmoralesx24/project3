import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
// import { Redirect } from "react-router-dom";
import "../styles/home.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    // preventing the default behavior of the formwhich is reloading the page
    event.preventDefault();
    if (this.state.name && this.state.password) {
      API.createUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      })
        .then(res => {
          this.props.push("users/login");
        })
        .catch(err => console.log(err));

      this.setState({
        name: "",
        email: "",
        password: "",
        password2: ""
      });
    }
  };

  render() {
    return (
      <div className="background-page">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus" /> Register
              </h1>
              {/* include a partial messages here ex..alert/error */}
              <form action="/users/register" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Input
                    className="form-control"
                    type="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Enter Name (required)"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    className="form-control"
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Enter Email (required)"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    className="form-control"
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Enter Password (required)"
                  />
                </div>
                <div className="form-group">
                  <Input
                    className="form-control"
                    type="password"
                    id="password2"
                    value={this.state.password2}
                    onChange={this.handleInputChange}
                    name="password2"
                    placeholder="Re-enter Password (required)"
                  />
                </div>
                <FormBtn
                  className="btn btn-primary btn-block"
                  onClick={this.handleFormSubmit}
                >
                  Register
                </FormBtn>
              </form>
              <p className="lead mt-4">
                Have An Account? <a href="/users/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
