import React from 'react';
import Header from './components/header'
import TodoList from './components/todoList'
import './App.css';


//-------------------------------

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
