
//axios call 

import React, { Component } from "react";
// import Passport from "passport-local-mongoose";
// import router from "../routes/auth";
import axios from 'axios';

import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Quotes from "../components/Quotes";

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

  
  state = {
    QuoteItem: "",
    QuotesList: [
      {
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "-Aristotle"
      }
    ]
  };
  
  componentDidMount () {

    Array.prototype.random = function () {
      return this[Math.floor((Math.random()*this.length))];
    }
  
    axios
    .get("https://type.fit/api/quotes/", {
  
    })
    .then((response) => {
        this.setState({ QuotesList: [response.data.random()] });
        console.log("state: ", this.state);
    })
    .catch((error) => {
        console.log('error on component did mount', error)
    });
  
    
  }

  // changes here

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
      <h1>Quotes</h1>
      <div>
        <p>
          {this.state.QuotesList[0].text}
        </p>
        <p>
          {this.state.QuotesList[0].author}
        </p>
      </div>
      {/* <QuotesList QuotesList={this.state.QuotesList}>
      {Quoteslist.text}
      {Quoteslist.author}
      </QuotesList> */}
      </Wrapper>
      <Footer />
      </div>
    )

  }
};

export default Login;