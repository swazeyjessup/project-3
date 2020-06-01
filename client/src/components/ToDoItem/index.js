import React from 'react';
import { Collection } from 'mongoose';
import "./style.css";


export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const score = toDoItem.score

console.log(score, 'score property')


return (
<div className="container">
    <div className="form-control">
        <div className="item">
        {toDoItem.text} 
        
        </div>
        <p>Score: {score} </p>
<div className={toDoItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={() => MarkAsDone(score, toDoItem._id)} 
    value={index}
    className="btn"
    >Done</button>



</div>
</div>
</div>
)
};