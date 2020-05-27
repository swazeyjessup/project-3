import React from 'react';

export default function AddToDo(props) {
const toDoItem = props.toDoItem;
const updateToDoItem = props.updateToDoItem;
const saveToDoItem = props.saveToDoItem;

return (
<div>
    <form>
    <div>
        <label for="name">Habit:</label><br></br>
        <input
        type="text"
        name="toDoItem"
        placeholder="Add a habit"
        value={toDoItem}
        onChange={updateToDoItem}
        />
    </div>

    <div>
        <button onClick={saveToDoItem}>Add it!</button>
    </div>
    </form>
</div>
);
}
