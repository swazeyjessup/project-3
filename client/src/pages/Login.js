
//axios call 

import React, { Component } from "react";
import Passport from "passport";
import router from "../routes/auth";
// import axios from 'axios';

import LoginForm from "../components/LoginForm";

class Login extends Component {

// Setting component's initial state
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
            <LoginForm
            />
            {/* <Link to="/auth/google">Sign In with Google/></Link> */}
      </div>
    )

  }
};

export default Login;

// https://www.youtube.com/watch?v=9x66l93iEW0
// client ID with Google
// 420907909841-2tup4rht8kb8iogshougi02jbcmok48i.apps.googleusercontent.com
// client secret
// Qiy7U9r3CrdIU2BeqrB7jHRn

// API KEY
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script> */}
  // API KEY - AIzaSyBO2HRofVC4Te_HfErdoBZVKzzq_3Xlt_g