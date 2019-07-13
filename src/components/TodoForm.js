import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      return;
    }
    addTodo({name: title});
    setTitle('');
  }
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="ToDo title" onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
 
export default TodoForm;
