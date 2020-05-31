import React from 'react';

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const score = props.toDoItem.score

// score.setState({
//     score: {
//         type: Number
//     }
// })

console.log(toDoItem.score, 'todoitem.score property')

return (<div className={toDoItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={MarkAsDone} 
    value={index}
    >done</button>
{toDoItem.text}
{toDoItem.score}
</div>);
}