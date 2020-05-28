import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Login from "./pages/Login";
import Form from "./pages/Form";
import Habits from "./pages/Habits";
import Leaderboard from "./pages/Leaderboard";

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <NavBar />
      <Route exact path="/" component={Login} />
      <Route exact path="/habits" component={Habits} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
      </Router>
    );
  }
}

export default App;
