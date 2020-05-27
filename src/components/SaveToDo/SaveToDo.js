// import React, { Component } from "react";
// import ToDoItem from "../components/ToDoItem";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// const ToDoMap = props.ToDoMap

var ToDoSchema = new Schema({
    text: String,
    done: String,
});


// ToDoMap.map((ToDoItem, index) => (
//     SavingToDo = {ToDoSchema}
// ))


const Habit = mongoose.model('habit', ToDoSchema);
module.exports = Habit;