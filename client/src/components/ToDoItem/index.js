import React from 'react';
import './ToDoItem.css';
// import SavedHabits from '../../routes/HabitRoute.js';
import axios from "axios";

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const markAsDone = props.markAsDone;
const index = props.index;

return (<li className={toDoItem.done ? 'done' : ''}>
<input type="checkbox" onClick={markAsDone} checked={toDoItem.done} value={index} />
{toDoItem.text}
</li>);
}


// I am working on this below

// class ToDoItem extends Component {

//     HabitItem(props) {
//         const HabitItem = props.HabitItem;
//         const markAsDone = props.markAsDone;
//         const index = props.index;}

//     state = {
//         habits: []
//     }

//     componentDidMount() {
//         axios.get('/api/SavedHabits')
//             .then((response) => {
//                 this.setState({ habits: response.data });
//             })
//     };

//     render() {
//         return (
//         <li className={HabitItem.done ? 'done' : ''}>
//         <input type="checkbox" onClick={markAsDone} checked={HabitItem.done} value={index} />
//         {HabitItem.text}
//         </li>
//         );
//     }
// }

// export default ToDoItem;