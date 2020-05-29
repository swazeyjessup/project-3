
//axios call 

import React, { Component } from "react";
// import Passport from "passport-local-mongoose";
// import router from "../routes/auth";
// import axios from 'axios';

class Login extends Component {

  //Setting component's initial state
  state = {
    email: "",
    password: "",
  };

  handleInputChange = event => {

    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {

    return (
      <div>
        <form className="logininfo">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
};

export default Login;