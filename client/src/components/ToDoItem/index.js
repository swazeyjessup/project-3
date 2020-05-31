import React from 'react';
import { Collection } from 'mongoose';

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const score = toDoItem.score
// let scoreState = this.state.score

// score.setState({
//     score: {
//         type: Number
//     }
// })

// AddScore = (event) => {
//     score: scoreState+1,
// }

// console.log(toDoItem.score, 'todoitem.score property')
// console.log(props.toDoItem.score, 'props.todoitem.score property')
console.log(score, 'score property')
// console.log(scoreState, 'scoreState property')

return (<div className={toDoItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={MarkAsDone} 
    value={index}
    >done</button>
{toDoItem.text}
{score}
</div>);
}