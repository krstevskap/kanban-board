import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";
import "./task.css";

const Task = ({ id, text, type, deleteTask, editTask, index }) => {
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="task"
          draggable="true"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{text}</p>
          <div className="buttons">
            <MdEdit
              className="edit-button"
              onClick={() => editTask(id, text)}
            />
            <MdDeleteOutline
              className="delete-button"
              onClick={() => deleteTask(id)}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
