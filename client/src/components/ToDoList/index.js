import React from 'react';
import SHabit from '../SHabit/SHabit';
import axios from 'axios';

function ToDoList(props) {
const toDoList = props.toDoList;
const SHabitToDisplay = props.SHabitToDisplay;
const index = props.index;

// markAsDone = (event) => {
//     const index = event.target.value;
//     let SHabit = this.state.toDoList[index];
//     SHabit.done = !SHabit.done;

//     this.setState({
//         toDoList: this.state.toDoList
//     })
// }

return (
<div>
    {/* <ul>
    {
        toDoList.map((habitItem, index) => (
        <ToDoList
            habitItem={habitItem}
            // markAsDone={markAsDone}
            index={index}
            key={index}
        />
        ))
    }
    
    <li className={SHabitToDisplay.done ? 'done' : ''}>
    <input type="checkbox" onClick={markAsDone} checked={SHabitToDisplay.done} value={index} />
    {SHabitToDisplay.text}
    </li>
    </ul> */}
</div>
);
}

export default ToDoList;