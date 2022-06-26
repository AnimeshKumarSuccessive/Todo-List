import React from 'react'
function TodoList (props) {
  const {id, value, status, changeStatus} = props

  return (
    <div>
      <input type="checkbox" checked={status} value={value} onClick={()=> changeStatus(id, status)}/>
      {value}
    </div> 
  )
  };

export default TodoList;