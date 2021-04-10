import React from "react";
import TodoApp from "./todo_components/TodoApp";
import "./App.css";

function ToDos() {
  return (
    <div className="ToDos">
      <h1>ToDo List with React and MaterialUI</h1>
      <h3>Create, Read, Update, and Delete ToDos!</h3>
      <TodoApp />
    </div>
  );
}

export default ToDos;
