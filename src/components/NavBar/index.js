import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg text-light">
        <div className="container">
            <Link className="navbar-brand" to="/">Habit Tracker</Link>
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
                        >Form</Link>
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