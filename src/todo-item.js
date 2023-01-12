import React, { useState } from "react";
import styles from "./style.css";

const TodoItem = ({ title, onDelete, index }) => {
  const [value, setValue] = useState(false);

  return (
    <li key={index + 1} className={`todo-item ${value ? "completed" : ""}`}>
      <input
        type={"checkbox"}
        checked={value}
        onChange={() => setValue(!value)}
      />
      {title}
      <button className="butt-in-todo-item" onClick={onDelete}>
        &#10008;
      </button>
    </li>
  );
};

export default TodoItem;
