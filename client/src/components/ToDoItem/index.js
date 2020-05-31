import React from 'react';

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;

return (<li className={toDoItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={MarkAsDone} 
    // checked={toDoItem.done} 
    value={index}>done</button>
{toDoItem.text}

</li>);
}