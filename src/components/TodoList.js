import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetail from './TodoDetail';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="todo-list">
      <ul>
        { todos.map(todo => <TodoDetail todo={todo} />) }
      </ul>
    </div>
  );
}
 
export default TodoList;