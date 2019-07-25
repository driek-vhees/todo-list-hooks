import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = ({title}) => {
    setTodos([...todos, { id: uuid(), title, completed: false }]);
  };
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    }));
  }
  return (
    <TodoContext.Provider value={{todos, addTodo, toggleTodo}}>
      {props.children}
    </TodoContext.Provider>
  );
}
 
export default TodoContextProvider;