
import React, { Component } from "react";
// import AddToDo from "../components/AddToDo";
import ToDoList from "../components/ToDoList";
// import Form from "../pages/Form";

import axios from 'axios';

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

import style from "./style.css";

class Habits extends Component {
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
};



saveToDoItem = (event) => {

    event.preventDefault();

    const newHabit = {
        text: this.state.toDoItem,
        done: false
        }

    axios
    .post("/localhost:27017/HabitTracker", newHabit)
    .catch((error) => console.log(error));

    this.newHabit();

    this.setState({
    toDoList: this.state.toDoList.concat(newHabit),
    toDoItem: ''
    })

};

markAsDone = (event) => {
    const index = event.target.value;
    let toDoItem = this.state.toDoList[index];
    toDoItem.done = !toDoItem.done;

    this.setState({
    toDoList: this.state.toDoList
    })
};


render() {
return (
    <div>
        <NavBar />
        <Header />
        <Wrapper>
    <div className="container">
    <h1>Habits</h1>
    {/* <AddToDo
        toDoItem={this.state.toDoItem}
        updateToDoItem={this.updateToDoItem}
        saveToDoItem={this.saveToDoItem}
    /> */}
    <ToDoList
        toDoList={this.state.toDoList}
        markAsDone={this.markAsDone}
    />
    </div> 
    </Wrapper>
    <Footer />
    </div>
);
}

}


export default Habits;

