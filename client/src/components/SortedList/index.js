import React from 'react';
import SortedItem from '../SortedItem';
import { Collection } from 'mongoose';


function SortedList(props) {
const SortedList = props.SortedList;
const toDoItem = SortedItem;
const score = SortedList.score;


console.log('SortedItem on List', SortedItem)
console.log('SCORE', score)
console.log('SortedList: ', SortedList)

return (
<div>
    
    {
        SortedList.map((toDoItem, index) => (
        <SortedItem
            toDoItem={toDoItem}
            index={index}
            key={index}
            score={toDoItem.score}
        />
        ))
    }   
    
</div>
);
}

export default SortedList;