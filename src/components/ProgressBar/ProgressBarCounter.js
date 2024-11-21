import React from 'react';
import './progressBar.css';

const ProgressBarCounter = ({title, numberOfTasks}) => {
  return (
    <div className='counter-container'>
      <h4>{title}</h4>
      <p>{numberOfTasks}</p>
    </div>
  )
}

export default ProgressBarCounter
