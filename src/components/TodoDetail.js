import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoDetail = ({todo}) => {
  const { toggleComplete } = useContext(TodoContext);
  return (
    <li className={todo.completed ? 'complete' : 'incomplete'} onClick={() => toggleComplete(todo.id)}>
      <input type="checkbox" value={1} checked={todo.completed} />
      {todo.name}
    </li>
  );
}
 
export default TodoDetail;