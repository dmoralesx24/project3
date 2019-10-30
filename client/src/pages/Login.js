import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import "../styles/home.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  // this handles the event changes in the input box
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // this method handles the submit of the form
  handleFormSubmit = event => {
    // preventing the default behavior of the formwhich is reloading the page
    event.preventDefault();
    // error checking

    if (this.state.email && this.state.password) {
      API.SignIn(this.state.email, this.state.password)
        .then(res => {
          // return (
          //   <Redirect
          //     push
          //     to={{
          //       pathname: "/dashboard",
          //       state: { res }
          //     }}
          //   />
          // );
          this.props.history.push("/dashboard", JSON.stringify(res));
          // this.props.history.push({path: '/dashboard', state: res})
        })
        .catch(err => console.log(err));

      this.setState({
        email: "",
        password: ""
      });
    }
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt" /> Login
            </h1>
            {/* include a partial messages here ex..alert/error */}
            <form action="/users/login" method="POST">
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
              <FormBtn
                className="btn btn-primary btn-block"
                onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
            </form>
            <p className="lead mt-4">
              No Account? <a href="/users/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
