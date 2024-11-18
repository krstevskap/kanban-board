import React, { useState } from 'react';
import './column.css';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';

const Column = ({ title, type, tasks, setTasks }) => {

    const tasksByType = tasks.filter((t) => t.type === type);

    const [addNewTask, setAddNewTask] = useState(false);

    return (
        <div className='column'>
            <div className='column-header'>
                <h3>{title}</h3>
                <button
                    onClick={() => { setAddNewTask(true) }}
                    className='add-task-button'
                >+</button>
            </div>

            {tasksByType.map((t) => {
                return <Task key={t.id}
                    text={t.text}
                    type={t.type}
                />
            })}
            {addNewTask && <AddTask setAddNewTask={setAddNewTask} type={type} setTasks={setTasks} />}
        </div>
    )
}

export default Column
