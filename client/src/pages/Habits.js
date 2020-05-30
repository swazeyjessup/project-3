import React, { Component } from "react";
// import AddToDo from "../components/AddToDo";
import SavedHabit from "../components/SavedHabit/SavedHabit";
// import Form from "../pages/Form";

import axios from 'axios';

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

import style from "./style.css";

class SavedHabits extends Component {
    state = {
        SavedHabit: '',
        toDoList: [
            {
                text: 'Display to do item',
                done: true
            }
        ]
    };

    updateSavedHabit = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

        axios
            .get("/api/savedHabits")
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
        <SavedHabit
            SavedHabit={this.state.SavedHabit}
            markAsDone={this.markAsDone}
        />
        </div> 
        </Wrapper>
        <Footer />
        </div>
        );
    }


}



export default SavedHabits;