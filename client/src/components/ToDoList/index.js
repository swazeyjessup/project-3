import React from 'react';
import ToDoItem from '../ToDoItem/';

function ToDoList(props) {
const toDoList = props.toDoList;
const markAsDone = props.markAsDone;

return (
<div>
    <ul>
    {
        toDoList.map((toDoItem, index) => (
        <ToDoItem
            toDoItem={toDoItem}
            markAsDone={markAsDone}
            index={index}
            key={index}
        />
        ))
    }
    </ul>
</div>
);
}

export default ToDoList;