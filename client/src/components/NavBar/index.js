import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <div>
                    <img src={require("../NavBar/logo2.png")} alt="loading" className="logo2" />
                </div>

                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/habits"
                                className={window.location.pathname === "/habits" ? "nav-link active" : "nav-link"}
                            > Habits</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/form"
                                className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}
                            >Add Habit</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/leaderboard"
                                className={window.location.pathname === "/leaderboard" ? "nav-link active" : "nav-link"}
                            >Leaderboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                            >Sign Out</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;