
//axios call 

import React, { Component } from "react";
// import Passport from "passport-local-mongoose";
// import router from "../routes/auth";
// import axios from 'axios';

import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Login extends Component {

  //Setting component's initial state
  // state = {
  //   email: "",
  //   password: "",
  // };

  // handleInputChange = event => {

  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   if (name === "password") {
  //     value = value.substring(0, 15);
  //   }
  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   this.setState({
  //     email: "",
  //     password: "",
  //   });
  // };

  render() {
    return (
      <div className="page2">
        <Header />
        <Wrapper>
        <div className="container">
        <h1>Login</h1>
        </div>
      <div>
            <LoginForm />
      </div>
      </Wrapper>
      <Footer />
      </div>
    )

  }
};

export default Login;