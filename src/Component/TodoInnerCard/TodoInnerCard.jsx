/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { TodoButton, TodoInput, TodoList } from '../index.js';
import { InnerCard, CardBody, card_second,cardFirstButtons, hiddenScroll } from './style.js';

const TodoInnerCard = (props) => {
  const [todoItems, setToDoItems] = useState(JSON.parse(localStorage.getItem('todoItems')) || []);
  const [display, setDisplay] = useState("");
 
  useEffect(()=>{
     localStorage.setItem('todoItems',JSON.stringify(todoItems))
  },[todoItems]);

  const changeStatus = (id) => {
    setToDoItems((todoItems) => {
      const newToDoItems = todoItems.map(({id: eachId, status, value}) => {
        if(eachId === id){
          return ({value, status: !status, id});
        }
        return ({value, status, id: eachId});
      });
      return newToDoItems;
    })
  }

  const onInsert = (value) => {
    setToDoItems((todoItems) => {
      return [...todoItems, {value, id: uuid(), status: false}];
    });
  }

  const completeAllTask = () => {
    setToDoItems((todoItems) => {
      const newToDoItems = todoItems.map(({id, value}) => {
          return ({value, status: true, id})
      });
      return newToDoItems;
    })
  }

  const clearCompleted = () => {
    setToDoItems((todoItems) => {
      const filterArray = todoItems.filter(({status}) => {
          return status === false;
      });
      return filterArray;
    })
  }
  
  return (
    <div className="card" style={InnerCard}>
      <div className="card-body" style={CardBody}>
        <div className="card_first">
          <div>
            <TodoInput onInsert={onInsert} />
          </div>
          <div style={cardFirstButtons}>
            <TodoButton label="Completed all task" onClick={completeAllTask} />
            <TodoButton label="Clear Completed" onClick={clearCompleted} />
          </div>
        </div>
        <hr/>
        <div className= "scroll" style = {hiddenScroll}>
          <div className="card_second" style={card_second}>
            {todoItems.map(({id, value, status}) => {
 
             if(status === display){
               return ( <TodoList 
                key={id} 
                id={id} 
                value={value} 
                status={status} 
                changeStatus={changeStatus} 
              />);
             }else if(display === ""){
              return ( <TodoList 
                key={id} 
                id={id} 
                value={value} 
                status={status} 
                changeStatus={changeStatus} 
              />);
             }
            })}                         
          </div>
        </div>
        <hr/>
        <div>
          <div className="card_third"  style={cardFirstButtons}>
              <div>
              <TodoButton label={todoItems.length + ' task left'}  />
              </div>
              <div  style={cardFirstButtons}>
                <TodoButton label="All" onClick={() => setDisplay("")} />
                <TodoButton label="Uncompleted" onClick={() => setDisplay(false)} />
                <TodoButton label="Completed" onClick={() => setDisplay(true)} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoInnerCard;
