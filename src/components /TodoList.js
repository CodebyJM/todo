import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, todos, setTodos }) => {
  return (
  <div className="todo-container">
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo 
          setTodos={setTodos}
          text={todo.text}
          todo={todo}
          key={todo.id}
          todos={todos}
          
        />
      ))}
    </ul>
  </div>
  )
}

export default TodoList