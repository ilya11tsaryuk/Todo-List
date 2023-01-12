import React, { useState } from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import styles from "./style.css";

function App() {
  return (
    <div className="page">
      <h1 className="header">Todo list</h1>
      <TodoList />
    </div>
  );
}

export default App;
