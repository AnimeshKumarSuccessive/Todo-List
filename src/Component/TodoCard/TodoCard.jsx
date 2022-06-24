import React from 'react';
import { TodoInnerCard } from '..';
import { getTodoItem } from '../../lib/helper';
import {card} from './style';

const TodoCard = () => {
  return (
    <div className='Card' style={card} >
         <TodoInnerCard todolist={JSON.parse(getTodoItem('todolist'))}/>
    </div>
  )
}

export default TodoCard