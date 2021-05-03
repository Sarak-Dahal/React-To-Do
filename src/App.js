import React, { useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputName, setInputName] = useState("");
  return (
    <div className="App">
      <header>
        <h1>{inputName}'s Todo List</h1>
      </header>
      <Form inputName={inputName} setInputName={setInputName} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
