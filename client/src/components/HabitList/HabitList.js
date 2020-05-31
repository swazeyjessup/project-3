import React from 'react';
import ToDoItem from '../ToDoItem';

function HabitList(props) {
const HabitList = props.HabitList;
const MarkAsDone = props.MarkAsDone;
const toDoItem = props.toDoItem;
const score = props.score


console.log('habit list score', score)
console.log('habit list props.score', props.score)
// console.log('habit list toDoItem', toDoItem)

return (
<div>
    
    {
        HabitList.map((toDoItem, index) => (
        <ToDoItem
            toDoItem={toDoItem}
            MarkAsDone={MarkAsDone}
            index={index}
            key={index}
            score={toDoItem.score}
        />
        ))
    }
    
</div>
);
}

export default HabitList;