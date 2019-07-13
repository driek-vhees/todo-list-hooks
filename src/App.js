import React from 'react';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>My TODOs</h1>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
