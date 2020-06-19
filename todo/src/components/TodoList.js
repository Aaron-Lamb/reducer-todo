import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import {initialState, reducer} from '../reducers/index';
import './Todo.css';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState({
        item: '',
        id: Date.now(),
        completed: false
    })
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = event => {
        setNewTodo({
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: "ADD_ITEM", payload: newTodo.item})
        setNewTodo({
            item: '',
            id: Date.now(),
            completed: false
        })
    }

    const toggleCompleted = (event) => {
        state.todos.forEach(item => console.log(item.item))
        dispatch({ type: "TOGGLE_COMPLETED", payload: event.target.textContent })
    }

    const clearCompleted = (event) => {
        event.preventDefault();
        dispatch({ type: "CLEAR_COMPLETED" })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add item <input name='item' id='item' value={newTodo.item} onChange={handleChange} />
                </label>
                <button type='submit'>Add to list</button>
            </form>
            {state.todos.map(listItem => {
                return(
                    <Todo todo={listItem} class={`item${listItem.completed ? ' completed' : ''}`} click={toggleCompleted} />
                )
            })}
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList;