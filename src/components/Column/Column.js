import React, { useState } from "react";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";
import { Droppable } from "@hello-pangea/dnd";
import { FaPlus } from "react-icons/fa";
import "./column.css";

const Column = ({ title, type, tasks, setTasks, color }) => {
  const tasksByType = tasks.filter((t) => t.type === type);

  const [addNewTask, setAddNewTask] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, currentText) => {
    setEditingTask({ id, text: currentText });
    setAddNewTask(true);
  };

  return (
    <div className="column">
      <div
        className="column-header"
        style={{ borderBottom: `2px solid ${color}` }}
      >
        <div className="title">
          <button
            onClick={() => {
              setAddNewTask(true);
              setEditingTask(null);
            }}
            className="add-task-button"
          >
            <FaPlus />
          </button>
          <p>{title}</p>
        </div>
        <div className="number-of-tasks" style={{ color: color }}>
          {tasksByType.length}
        </div>
      </div>

      <div className="filtered-tasks-container">
        <Droppable droppableId={type}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`filtered-tasks-container ${
                snapshot.isDraggingOver ? "dragging-over" : ""
              }`}
            >
              {tasksByType.map((t, index) => {
                return (
                  <Task
                    key={t.id}
                    id={t.id}
                    text={t.text}
                    type={t.type}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    index={index}
                  />
                );
              })}
              <div>
                {addNewTask && (
                  <AddTask
                    setAddNewTask={setAddNewTask}
                    type={type}
                    setTasks={setTasks}
                    editingTask={editingTask}
                  />
                )}
              </div>
              <span style={{ display: "none" }}>{provided.placeholder}</span>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
