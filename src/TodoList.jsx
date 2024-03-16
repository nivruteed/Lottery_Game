import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        const newId = uuidv4();
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: newId }];
        });
        setNewTodo("");
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    }

    let upperCaseOne = () =>{
        setTodos((prevTodos) => 
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />&nbsp;&nbsp;<br /><br />
            <button onClick={addNewTask}>Add task</button><br /><br />
            <hr />
            <h3>TodoList of Task</h3>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;   &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={upperCaseOne}>UpperCaseOne</button>
                    </li>
                ))}
            </ul>
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );
};
