import React from 'react';

const Todo = props => {
    return(
        <div className={props.class} onClick={props.click}>
            <h4>{props.todo.item}</h4>
        </div>
    )
}

export default Todo;