import React from 'react';

export default function ToDoItem(props) {
const toDoItem = props.toDoItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const Score = props.Score

return (<div className={toDoItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={MarkAsDone} 
    Score={Score}
    value={index}>done</button>
{toDoItem.text}
</div>);
}

render() {
    return(
        <div>
        <NavBar />
        <Header />
        <Wrapper>
        <div className="container">
            <h1>Leaderboard</h1>
        </div>
        </Wrapper>
        <Footer />
        </div>
    )
}