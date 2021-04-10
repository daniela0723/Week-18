import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
//Paper is a container, Grid is MUI's grid system
import { Grid } from "@material-ui/core";
//UUID is a tool that generates a unique id for each object
//Can't use index as id because it will change
import { v4 as uuidv4 } from "uuid";

//TodoApp will manage the state
//Todos will be stored in localStorage
function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos), [todos]);
  });

  return (
    <div>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={10} md={7} lg={7}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoApp;
