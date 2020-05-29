import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


import Form from "./pages/Form";
import Habits from "./pages/Habits";
import Leaderboard from "./pages/Leaderboard";

import style from "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
      <div className="page">
        <NavBar />
        <Header />
        <Wrapper>
      <Route exact path="/" component={Habits} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      </Wrapper>
      <Footer />
      </div>
      
      </Router>
    );
  }
}

export default App;
