import React from 'react';

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;

return (<li className={toDoItem.done ? 'done' : ''}>
{/* <input type="checkbox" onClick={MarkAsDone} checked={toDoItem.done} value={index} /> */}
{toDoItem.text}
<button>Did it</button>
</li>);
}