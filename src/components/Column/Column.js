import React from 'react';
import './column.css';
import Task from '../Task/Task';

const Column = ({ title, type, tasks, setTasks }) => {

    const tasksByType = tasks.filter((t) => t.type === type);
    console.log(tasksByType);

    return (
        <div className='column'>
            <div className='column-header'>
                <h3>{title}</h3>
                <button>+</button>
            </div>

            {tasksByType.map((t) => {
                return <Task key={t.id}
                    text={t.text}
                    column={t.column}
                />
            })}
        </div>
    )
}

export default Column
