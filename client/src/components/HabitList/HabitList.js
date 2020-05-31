import React from 'react';
import ToDoItem from '../ToDoItem';

function HabitList(props) {
const HabitList = props.HabitList;
const MarkAsDone = props.MarkAsDone;
const score = props.score;

return (
<div>
    
    {
        HabitList.map((toDoItem, index) => (
        <ToDoItem
            toDoItem={toDoItem}
            MarkAsDone={MarkAsDone}
            index={index}
            key={index}
            Score={score}
        />
        ))
    }
    
</div>
);
}

export default HabitList;