import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { getTodoItem, setTodoItem } from '../../lib/helper';

function TodoList(props) {
  const {value, isChecked } = props;
  const [checked , setChecked] = useState(isChecked); 
  const onClickHanlder = (e) => {
    setChecked(e.target.checked);
    const data = JSON.parse(getTodoItem('todolist'));
    const newData = data.map((todoData)=>{
      if(todoData.value === e.target.value){
           return {
             value,
             status: e.target.checked
           }    
        }
        return todoData;
    });
    setTodoItem('todolist', JSON.stringify(newData));
  };

  return (
    <div>
      <input checked={checked} type="checkbox" value={value} onClick={(e)=> onClickHanlder(e)}/>
        {value}
    </div>
  )
}

export default TodoList