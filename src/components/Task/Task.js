import React from 'react';
import './task.css';

const Task = ({ id, text, column }) => {
  return (
    <div className='task-container'
      draggable='true'>
      <p>{text}</p>
    </div>
  )
}

export default Task
