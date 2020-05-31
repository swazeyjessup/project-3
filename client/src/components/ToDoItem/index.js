import React from 'react';

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const Score = props.Score

return (<div className={toDoItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={MarkAsDone} 
    Scpre={Score}
    value={index}>done</button>
{toDoItem.text}
<<<<<<< HEAD

</li>);
=======
</div>);
>>>>>>> 76023341f5b03add6c287a3e0d4d9997d625794c
}