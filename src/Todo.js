import React, {useContext} from "react";
import { TodoContext } from "./context";
import "./App.css";


function Todo () {
    const {todo, index, completeTodo, removeTodo} = useContext(TodoContext);
    return ( 
    <div 

   
    className="todo"
    style = {{ textDecoration: todo.isCompleted ? "Line-through" : ""}}
    key={index}
    >
    {todo.text}
    <div>
        
    <button className="todo-function completed" 
    onClick={() => completeTodo(index)}>
    Task Done</button>
    <button className="todo-function remove" 
    onClick={() => removeTodo(index)}>
        x</button>
    </div>
    </div>
    );
}

export default Todo;