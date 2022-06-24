import React from "react";
import { todoInput, input } from './style.js';

const TodoInput = (props) => {
  const {onSubmitHandler, value, setItemValue} =props;
   
   return (
      <div className="todoInput" style={todoInput}>
         <form onSubmit={(e) =>onSubmitHandler(e)} >
         <input 
            name='todoItem'
            style={input} 
            placeholder="Type the Todo List"
            value={value}
            onChange={(e)=> setItemValue(e.target.value)}
         />
         <input type='submit' hidden/>
         </form>
      </div>
   );   
}


export default TodoInput;