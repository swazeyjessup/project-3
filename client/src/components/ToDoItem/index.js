import React from 'react';

// import SavedHabits from '../../routes/HabitRoute.js';
// import axios from "axios";

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const markAsDone = props.markAsDone;
const index = props.index;

return (<li className={toDoItem.done ? 'done' : ''}>
<input type="checkbox" onClick={markAsDone} checked={toDoItem.done} value={index} />
{toDoItem.text}
</li>);
}