import React from 'react';

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const score = props.score;

return (<div className={toDoItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={MarkAsDone} 
    score={score}
    value={index}>done</button>
{toDoItem.text}

</div>);
}