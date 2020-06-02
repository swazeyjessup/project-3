import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";



import Login from "./pages/Login";
import Form from "./pages/Form";
import Habits from "./pages/Habits";
import Leaderboard from "./pages/Leaderboard";

import "./App.css";

class App extends Component {

  // First try to fix Background Image

  // let imgUrl = './img/download.jpeg';
  // let styles = {
  //     root: {
  //         backgroundImage: url(./img/download.jpeg);
  //     background-repeat: repeat-y;
  //     height: 100%;
  //     },
  //   }


  // Second try to fix Background Image

  // repeatImg() {
  //   let imgUrl = './img/download.jpeg';
  //   document.getElementById("root").style.backgroundImage = imgUrl;
  //   document.getElementById("root").style.backgroundPosition = "top left";
  //   document.getElementById("root").style.backgroundRepeat = "repeat-y";
    
  //   alert(document.getElementById("root").style.backgroundImage);
  //   alert(document.getElementById("root").style.backgroundPosition);
  //   alert(document.getElementById("root").style.backgroundRepeat);
  //   }

  // Third try

  // colorbackground () {
  //   document.getElementById("root").style.backgroundColor = '#61dafb'
  // }

  // Forth Try

  // const isBackgroundRed = true;

  

  render() {
    return (
      <Router>
      <div className="page">

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
