import React, { useEffect, useState } from 'react'
import { getTodoItem, setTodoItem } from '../../lib/helper.js';
import { TodoButton, TodoInput, TodoList } from '../index.js';
import { InnerCard, CardBody, card_second,cardFirstButtons, hiddenScroll } from './style.js';

const TodoInnerCard = (props) => {
  const {todolist = [ {value:'', status:''}] } = props;
  const [newToDolist, setnewToDoList] = useState(todolist || []);
  const [inputValue, setItemValue] = useState("");

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    const formDataValue = new FormData(e.target).get('todoItem');
    const preTodoList = JSON.parse(getTodoItem('todolist')) || [];
    preTodoList.push({
       value:formDataValue,
       status: false
    });
    setTodoItem('todolist', JSON.stringify(preTodoList));
    setnewToDoList(JSON.parse(getTodoItem('todolist')));
    setItemValue('')
 }   

 const localStorageHanlder = (key) => { 
    setTodoItem('todolist', JSON.stringify(JSON.parse(getTodoItem('todolist')).filter(element => element.status === false)));
    setnewToDoList(JSON.parse(getTodoItem('todolist')));
  }
  

  
  return (
    <div className="card" style={InnerCard}>
      <div className="card-body" style={CardBody}>
        <div className="card_first">
          <div>
            <TodoInput setItemValue={setItemValue} value={inputValue} onSubmitHandler={(e)=> onSubmitHandler(e)}/>
          </div>
          <div style={cardFirstButtons}>
            <TodoButton label="Completed all task" />
            <TodoButton label="Clear Completed" onClick={localStorageHanlder}/>
          </div>
        </div>
        <hr/>
        <div className= "scroll" style = {hiddenScroll}>
          <div className="card_second" style={card_second}>
              {
                newToDolist.map((element)=>{
                return (
                  <TodoList 
                  value={element.value} 
                  isChecked={element.status} 
                  />
                  )
                })
              }
          </div>
        </div>
        <hr/>
        <div>
          <div className="card_third"  style={cardFirstButtons}>
              <div>
              <TodoButton label={newToDolist.length + ' task left'} />
              </div>
              <div  style={cardFirstButtons}>
                <TodoButton label="All Uncompleted"  />
                <TodoButton label="Completed" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoInnerCard;
