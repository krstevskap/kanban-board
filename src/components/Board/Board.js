import React, {useState} from 'react';
import Tasks from '../Tasks/Tasks';
import ProgressBar from '../ProgressBar/ProgressBar';
import './board.css';

const Board = () => {

    const TASKS = [
        { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "toDo" },
        { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "toDo" },
        { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "toDo" },
        { id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "inProgress" },
        { id: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "inProgress" },
        { id: 6, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "done" },
    ];

    const [tasks, setTasks] = useState(TASKS);

    return (
        <div className='board-container'>
            <div className='left-column'>
                <Tasks tasks={tasks} setTasks={setTasks} />
            </div>
            <div className='right-column'>
                <ProgressBar tasks={tasks} />
            </div>
        </div>
    )
}

export default Board
