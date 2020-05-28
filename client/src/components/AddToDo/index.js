import React from 'react';
import "./style.css"


export default function AddToDo(props) {
const toDoItem = props.toDoItem;
const updateToDoItem = props.updateToDoItem;
const saveToDoItem = props.saveToDoItem;

return (
<div className="container">
    <form>
        <div className="form-control">
    <div className="form-group">
        <label for="name"><h2>What habit are you working on today?</h2></label><br></br>
        <input
        type="text"
        name="toDoItem"
        placeholder="i.e. stop biting nails"
        value={toDoItem}
        onChange={updateToDoItem}
        className="form-control"
        />
    </div>

    <div>
        <button onClick={saveToDoItem} className="btn mt-3 mb-5">Add it!</button>
    </div>
    </div>
    </form>
</div>
);
}
