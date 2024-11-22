import React from 'react';
import Column from '../Column/Column';
import './tasks.css';

const Tasks = ({ tasks, setTasks }) => {
    return (
        <div className='column-container'>
            <Column
                title="To do"
                type="toDo"
                tasks={tasks}
                setTasks={setTasks}
            />
            <Column
                title="In progress"
                type="inProgress"
                tasks={tasks}
                setTasks={setTasks}
            />
            <Column
                title="Completed"
                type="done"
                tasks={tasks}
                setTasks={setTasks}
            />
        </div>
    )
}

export default Tasks