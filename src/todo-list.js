import React, { useState } from "react";
import TodoItem from "./todo-item";
import styles from "./style.css";
import AddTodo from "./add-todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const onDelete = (index) => {
    return setTodos(todos.filter((todo, i) => index !== i));
  };

  const onCreate = (value) => {
    return setTodos([...todos, { title: value }]);
  };

  return (
    <div className="todo-list">
      <AddTodo onCreate={onCreate} />

      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              index={todo.index + 1}
              title={todo.title}
              onDelete={() => onDelete(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
