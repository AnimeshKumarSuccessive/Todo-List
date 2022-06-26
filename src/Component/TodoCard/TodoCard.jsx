import React from 'react';
import { TodoInnerCard } from '..';
import {card} from './style';

const TodoCard = () => {
  return (
    <div className='Card' style={card} >
         <TodoInnerCard />
    </div>
  )
}

export default TodoCard