import React from 'react';
import ToDoItem from '../ToDoItem';
import { Collection } from 'mongoose';


function HabitList(props) {
const HabitList = props.HabitList;
const MarkAsDone = props.MarkAsDone;
const toDoItem = ToDoItem;
const score = HabitList.score


console.log('To Do Item', ToDoItem)
console.log('SCORE', score)
console.log('HabitList: ', HabitList)

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