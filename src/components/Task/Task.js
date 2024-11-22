import React from 'react';
import './task.css';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = ({ id, text, type, deleteTask, editTask }) => {
  return (
    <div className='task'
      draggable='true'>
      <p>{text}</p>
      <div className='buttons'>
        <FaEdit className='edit-button' onClick={() => editTask(id, text)} />
        <MdDelete className='delete-button' onClick={() => deleteTask(id)} />
      </div>
    </div>
  )
}

export default Task