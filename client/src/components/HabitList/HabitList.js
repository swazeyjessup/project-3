import React from 'react';
import ToDoItem from '../ToDoItem';

function HabitList(props) {
const HabitList = props.HabitList;
const MarkAsDone = props.MarkAsDone;

return (
<div>
    <ul>
    {
        HabitList.map((toDoItem, index) => (
        <ToDoItem
            toDoItem={toDoItem}
            MarkAsDone={MarkAsDone}
            index={index}
            key={index}
        />
        ))
    }
    </ul>
</div>
);
}

export default HabitList;