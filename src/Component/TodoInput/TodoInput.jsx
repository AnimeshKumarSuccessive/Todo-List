import React, { useState } from "react";
import { todoInput, input } from './style.js';

const TodoInput = (props) => {
   const {onInsert} = props;
   const [value, setItemValue] = useState('');

   return (
      <div className="todoInput" style={todoInput}>
         <input 
            name='todoItem'
            style={input} 
            placeholder="Type the Todo List"
            value={value}
            onKeyDown={(e)=> 
               {
                  if(e.keyCode === 13){
                     onInsert(value);
                     setItemValue('');
                     return;
                  }
               }} 
            onChange={(e)=>{
               setItemValue(e.target.value)
            }}
         />
      </div>
   );   
}

export default TodoInput;