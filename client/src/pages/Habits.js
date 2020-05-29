import React, { Component } from "react";
// import AddToDo from "../components/AddToDo";
import ToDoList from "../components/ToDoList";
import SHabit from "../components/SHabit/SHabit";
// import Form from "../pages/Form";

import axios from 'axios';

class Habits extends Component {
    state = {
        SHabit: '',
        toDoList: [
            {
                text: 'Display to do item',
                done: true
            }
        ]
    };

    updateSHabit = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

        axios
            .get("/api/HabitTracker")
            .then((response) => {
                this.setState({ [name]: response.data });
            })
            .catch((error) => console.log(error));
    };



    // saveToDoItem = (event) => {

    //     event.preventDefault();
    
    //     const newHabit = {
    //         text: this.state.toDoItem,
    //         done: false
    //         }
    
    //     axios
    //     .post("/HabitTracker", newHabit)
    //     .catch((error) => console.log(error));

    //     this.setState({
    //     toDoList: this.state.toDoList.concat(newHabit),
    //     toDoItem: ''
    //     })
    
    // }

    render() {
        return (
            <div className="container">
                <h1>Add Habit</h1>
                {/* <AddToDo
                toDoItem={this.state.toDoItem}
                updateToDoItem={this.updateToDoItem}
                saveToDoItem={this.saveToDoItem}
            />
        */}
                <ToDoList
                    toDoList={this.state.toDoList}
                    markAsDone={this.markAsDone}
                />
            </div>
        );
    }

}

export default Habits;