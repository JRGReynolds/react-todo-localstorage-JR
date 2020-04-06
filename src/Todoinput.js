import React, {useState, useContext} from "react";
import "./App.css";
import { TodoInputContext } from "./context";

function TodoInput() {
    const [value,setValue] = useState("")
    const {addTodo} = useContext(TodoInputContext);
    function handleSubmit(e){
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");

        
    }
  return (
      

    
    <form onSubmit={handleSubmit}>
     <input 
     placeholder="Enter Item, press Enter"
     type="text"
     value={value}
     onChange={e=>setValue(e.target.value)}
     
     />
  </form>

  
);
}

export default TodoInput;