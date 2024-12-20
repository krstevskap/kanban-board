import React, { useState } from "react";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";
import { Droppable } from "@hello-pangea/dnd";
import "./column.css";

const Column = ({ title, type, tasks, setTasks }) => {
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
      <div className="column-header">
        <h3>{title}</h3>
        <button
          onClick={() => {
            setAddNewTask(true);
            setEditingTask(null);
          }}
          className="add-task-button"
        >
          +
        </button>
      </div>

      <div className="tasks-container">
        <Droppable droppableId={type}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
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
              <span style={{ display: "none" }}>{provided.placeholder}</span>
            </div>
          )}
        </Droppable>

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
      </div>
    </div>
  );
};

export default Column;
