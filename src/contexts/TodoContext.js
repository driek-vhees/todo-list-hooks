import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const completedSort = (t1, t2) => {
    if (t1.completed === t2.completed) {
      return 0;
    }
    return t1.completed ? 1 : -1;
  };
  const [todos, setTodos] = useState([
    { id: uuid(), name: 'Read about React-Hooks on NetNinja', completed: true },
    { id: uuid(), name: 'Create sample app with React-Hooks', completed: false },
  ].sort(completedSort));
  const addTodo = ({name}) => {
    setTodos([...todos, { id: uuid(), name, completed: false }].sort(completedSort));
  };
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    }).sort(completedSort));
  }
  return (
    <TodoContext.Provider value={{todos, addTodo, toggleComplete}}>
      {props.children}
    </TodoContext.Provider>
  );
}
 
export default TodoContextProvider;