import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg text-light">
           <img src={require("../NavBar/logo.jpeg")} alt="loading" className="logo2" /> 
        <div className="container">
        
            <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Habits</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/form"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Add Habit</Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            to="/leaderboard"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Leaderboard</Link>
                        </li>
                        </ul>
                        </div>
        </nav>
    );
}

export default NavBar;