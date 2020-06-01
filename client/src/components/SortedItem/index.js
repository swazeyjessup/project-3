import React from 'react';
import { Collection } from 'mongoose';


export default function SortedItem(props) {
const toDoItem = props.toDoItem;
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
// console.log(scoreState, 'scoreState property')

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