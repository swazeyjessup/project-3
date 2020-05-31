import React, { Component } from "react";
import HabitList from "../components/HabitList/HabitList";
import axios from 'axios';

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

import "./style.css";

class App extends Component {
    state = {
        toDoItem: '',
        HabitList: [
            {
                text: 'Display to do item',
                done: true,
                score: 0
            }
        ]
    };

    componentDidMount () {
        axios
            .get('/HabitTracker')
            .then((response) => {
                this.setState({ HabitList: response.data });
            })
            .catch((error) => {
                console.log('error on component did mount', error)
            })
    }

    updateToDoItem = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    MarkAsDone = (event) => {
        const index = event.target.value;
        let toDoItem = this.state.HabitList[index];
        toDoItem.done = !toDoItem.done;
        let score = this.state.score;

        // HabitList.score.update(
        //     { $inc: { score: +1 } }
        // )

        this.setState({
            HabitList: this.state.HabitList
        })
        

    }
    

    render() {
        return (
            <div>
            <NavBar />
            <Header />
            <Wrapper>
        <div className="container">
        <h1>Habits</h1>
        <HabitList
            HabitList={this.state.HabitList}
            MarkAsDone={this.MarkAsDone}
        />
        </div> 
        </Wrapper>
        <Footer />
        </div>
        );
    }


}



export default App;