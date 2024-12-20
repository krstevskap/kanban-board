import React, { useState, useEffect } from "react";
import Tasks from "../Tasks/Tasks";
import "./board.css";

const Board = () => {
  const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="board-container">
      <div className="left-column">
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Board;
