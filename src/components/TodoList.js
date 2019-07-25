import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetail from './TodoDetail';

const TodoList = () => {
  const { todos, toggleTodo } = useContext(TodoContext);
  return (
    <div className="todo-list">
      <ul>
        { todos.map(todo => <TodoDetail key={todo.id} todo={todo} onClick={() => toggleTodo(todo.id)} />) }
      </ul>
    </div>
  );
}
 
export default TodoList;