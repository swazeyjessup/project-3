import React from 'react';
import { Collection } from 'mongoose';


export default function SortedItem(props) {
const toDoItem = props.toDoItem;
const index = props.index;
const score = toDoItem.score

// console.log('SortedItem: ', SortedItem);
// console.log('toDoItem on Sorted: ', toDoItem);

return (
<div className="container">
    <div className="form-control">
        <div className="item">
        {toDoItem.text} 
        
        </div>
        <p>Score: {score} </p>
<div className={toDoItem.done ? 'done' : ''}>

</div>
</div>
</div>
)
};