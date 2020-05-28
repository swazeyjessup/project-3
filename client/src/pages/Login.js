//onchange handler to save what's in input fields (saves to state)
//onclick function
//axios call 

import React, { Component } from "react";
import setup from "passport";
import auth from "routes";
import axios from 'axios';

class Form extends Component {


    state = {
        username: '',
        password: '',
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
            .post("/localhost:27017/HabitTracker", newHabit)
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
