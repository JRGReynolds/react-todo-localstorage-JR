import React, {useState, useEffect} from "react";
import "./App.css";
import TodoInput from "./Todoinput";
import Todo from "./Todo";
import { TodoContext, TodoInputContext } from "./context";

function App() {

  const initialTodos = window.localStorage.getItem("todos")
  ? JSON.parse (window.localStorage.getItem("todos"))
  : [];

  const [todos,setTodos] = useState(initialTodos);

  function addTodo(value){
    const newTodos = [...todos, {text: value, isCompleted:false}];
    setTodos(newTodos);
  }

function removeTodo(index){
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos)
}

function completeTodo(index){
  const newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
}
 

useEffect(()=>{
  window.localStorage.setItem("todos", JSON.stringify(todos));
},[todos]);


  return (
  <div className="App">
    <div className="todo-list">
    {todos.map((todo, index)=>(
      <TodoContext.Provider 
      value={{index,todo, removeTodo, completeTodo}}
      >
    <Todo/>
    </TodoContext.Provider>
    ))}
    <TodoInputContext.Provider value={{addTodo}}>
      <TodoInput/>
      </TodoInputContext.Provider>
    </div>
    </div>
  );
 }

export default App;