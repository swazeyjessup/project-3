import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ToDoList from './components/ToDoList';

//leadership board?

class App extends Component{
  state = {
    toDoList: [
      'Display to do item'
    ]
  };
  render() {
  return (
    <ToDoList toDoList={this.state.toDoList} />
  
  );
  
};

}

export default App;
