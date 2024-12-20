import React, { useState, useEffect } from "react";
import "./addTask.css";

const AddTask = ({ setAddNewTask, type, setTasks, editingTask }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === editingTask.id ? { ...t, text: text.trim() } : t
        )
      );
    } else {
      const newTask = {
        type,
        text: text.trim(),
        id: Math.floor(Math.random() * 1000000),
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    setText("");
    setAddNewTask(false);
  };

  return (
    <div className="new-task-container">
      <div className="new-task-header">
        <h3>Create new task</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="body">
          <textarea
            autoFocus
            value={text || ""}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="new-task-footer">
          <button id="add" type="submit">
            {" "}
            {editingTask ? "Edit task" : "Add new task"}{" "}
          </button>
          <button id="cancel" onClick={() => setAddNewTask(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
