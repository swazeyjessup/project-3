
import React, { Component } from "react";
import AddToDo from "../components/AddToDo";
// import ToDoList from "../components/ToDoList";

import axios from 'axios';

class Form extends Component {


    state = {
      toDoItem: '',
      toDoList: [
        {
          text: 'Display to do item',
          done: true
        }
      ]
    };
  
    updateToDoItem = (event) => {
      const { name, value } = event.target;
  
      this.setState({
        [name]: value
      })
    }


  
    saveToDoItem = (event) => {

      event.preventDefault();
  
      const newHabit = {
          text: this.state.toDoItem,
          done: false
          }
  
      axios
      .post("/HabitTracker", newHabit)
      .catch((error) => console.log(error));


      this.setState({
      toDoList: this.state.toDoList.concat(newHabit),
      toDoItem: ''
      })
  
  }
  
    markAsDone = (event) => {
      const index = event.target.value;
      let toDoItem = this.state.toDoList[index];
      toDoItem.done = !toDoItem.done;
  
      this.setState({
        toDoList: this.state.toDoList
      })
    }


    render() {
    return (
        <div className="container">
        <h1>Add Habit</h1>
        <AddToDo
          toDoItem={this.state.toDoItem}
          updateToDoItem={this.updateToDoItem}
          saveToDoItem={this.saveToDoItem}
        />

        {/* <ToDoList
          toDoList={this.state.toDoList}
          markAsDone={this.markAsDone}
        /> */}
      </div> 
    );
}

}

export default Form;
