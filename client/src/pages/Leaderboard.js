import React, { Component } from "react";
import SortedList from "../components/SortedList";
import axios from 'axios';

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import SortedItem from '../components/SortedItem';

import "./style.css";

class Leaderboard extends Component {
    state = {
        SortedItem: '',
        SortedList: [
            {
                text: 'Display to do item',
                done: true,
                score: 0
            }
        ]
    };

    // changes here
    componentDidMount() {
        axios
            .get('/api/sortedHabits')
            .then((response) => {
                response.data.sort(function (habit1, habit2) {
                    return habit2.score - habit1.score

                })
                this.setState({ SortedList: response.data });
            })
            .catch((error) => {
                console.log('error on sorted component did mount', error)
            })
    }


    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <Wrapper>
                    <div className="container fixBottom">
                        <h1>Leaderboard</h1>
                        <SortedList
                            SortedList={this.state.SortedList}
                        />
                    </div>
                </Wrapper>
                <Footer />
            </div>
        )
    }


}

export default Leaderboard;