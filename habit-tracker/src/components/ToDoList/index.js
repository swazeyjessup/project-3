import React from 'react';
import ToDoItem from '.../ToDoItem/';

export default function ToDoList(props) {
    const toDoList = props.toDoList;
    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                {
                    toDoList.map(toDoItem => (<ToDoItem toDoItem={toDoItem} />))
                }
            </ul>
        </div>
    );
}

