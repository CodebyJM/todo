import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components /Form';
import TodoList from './components /TodoList';


function App() {

  //run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, [])
 
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] =  useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilterTodos] = useState([]);

  useEffect (() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  // filter handler
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true));
      break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false));
      break;
      default:
        setFilterTodos(todos);
    }
  }

  //save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }

  



  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
        
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
