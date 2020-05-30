import React from 'react';
import axios from 'axios';

function SavedHabit(props) {
const SavedHabit = props.SavedHabit;
const HabitToDisplay = props.HabitToDisplay;
const index = props.index;
const MarkAsDone = props.MarkAsDone;

// MarkAsDone = (event) => {
//     const index = event.target.value;
//     let SavedHabit = this.state.SavedHabit[index];
//     SavedHabit.done = !SavedHabit.done;

//     this.setState({
//         SavedHabit: this.state.SavedHabit
//     })
// }

return (
<div>
    <ul>
    {/* {
        SavedHabit.map((habitItem, index) => (
        <SavedHabit
            habitItem={habitItem}
            MarkAsDone={MarkAsDone}
            index={index}
            key={index}
        />
        ))
    } */}
    
    {/* <li className={HabitToDisplay.done ? 'done' : ''}>
    <input type="checkbox" onClick={MarkAsDone} checked={HabitToDisplay.done} value={index} />
    {HabitToDisplay.text}
    </li> */}
    </ul>
</div>
);
}

export default SavedHabit;