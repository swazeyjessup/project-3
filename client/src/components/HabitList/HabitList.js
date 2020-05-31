import React from 'react';
import ToDoItem from '../ToDoItem';

function HabitList(props) {
const HabitList = props.HabitList;
const MarkAsDone = props.MarkAsDone;
const Score = props.Score

return (
<div>
    
    {
        HabitList.map((toDoItem, index) => (
        <ToDoItem
            toDoItem={toDoItem}
            MarkAsDone={MarkAsDone}
            index={index}
            key={index}
            Score={Score}
        />
        ))
    }
    
</div>
);
}

export default HabitList;