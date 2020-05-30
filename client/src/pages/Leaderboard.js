import React, { Component } from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

import "./style.css";

class Leaderboard extends Component {

    render() {
        return(
            <div>
            <NavBar />
            <Header />
            <Wrapper>
            <div className="container">
                <h1>Leaderboard</h1>
            </div>
            </Wrapper>
            <Footer />
            </div>
        )
    }


}

export default Leaderboard;