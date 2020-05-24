import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import ToDoList from './components/ToDoList/';
//import AddToDo from './components/AddToDo/';

import Form from "./pages/Form";
import Habits from "./pages/Habits";
import Leaderboard from "./pages/Leaderboard";

class App extends Component {

  render() {
    return (
      <Router>
      <div>
      <Route exact path="/" component={Habits} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
      </Router>
    );
  }
}

export default App;
