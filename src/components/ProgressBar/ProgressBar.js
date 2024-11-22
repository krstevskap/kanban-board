import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBarCounter from './ProgressBarCounter';
import "react-circular-progressbar/dist/styles.css";
import './progressBar.css';


const ProgressBar = ({ tasks }) => {

  const toDo = tasks.filter(task => task.type === "toDo").length;
  const inProgress = tasks.filter(task => task.type === "inProgress").length;
  const done = tasks.filter(task => task.type === "done").length;

  const totalTasks = tasks.length;
  const percentage = totalTasks > 0 ? Math.round((done / totalTasks) * 100) : 0;

  return (
    <div className='progress-bar-container'>
      <h3>Progress</h3>

      <div className='progress-bar'>
        <CircularProgressbar value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: `#875df9`,
            trailColor: '#d6d6d6',
          })} />
      </div>

      <div className='number-of-tasks'>
        <div className='up'>
          <ProgressBarCounter title="TOTAL" numberOfTasks={totalTasks} />
          <ProgressBarCounter title="COMPLETED" numberOfTasks={done} />
        </div>

        <div className='down'>
          <ProgressBarCounter title="IN PROGRESS" numberOfTasks={inProgress} />
          <ProgressBarCounter title="TO DO" numberOfTasks={toDo} />
        </div>
      </div>
    </div>
  )
}

export default ProgressBar