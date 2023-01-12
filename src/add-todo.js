import React, { useState } from "react";
import styles from "./style.css";

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");

  return (
    <div className="add-todo">
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button
        className="butt-in-add-todo"
        type="submit"
        onClick={() => {
          onCreate(value);
          setValue("");
        }}
      >
        &#9998;
      </button>
    </div>
  );
};

export default AddTodo;
