import React, {useState} from 'react';
import Column from '../Column/Column';
import './tasks.css';

const Tasks = () => {

    const TASKS = [
        {id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "allTasks"},
        {id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "allTasks"},
        {id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "toDo"},
        {id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "toDo"},
        {id: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "toDo"},
        {id: 6, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "done"},
    ];

    const [tasks, setTasks] = useState(TASKS);

    return (
        <div className='column-container'>
            <Column
                title="Tasks"
                type="allTasks"
                tasks={tasks}
                setTasks={setTasks}
            />
            <Column
                title="In progress"
                type="toDo"
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
