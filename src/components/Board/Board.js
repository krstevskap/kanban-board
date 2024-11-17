import React from 'react';
import Tasks from '../Tasks/Tasks';
import ProgressBar from '../ProgressBar/ProgressBar';
import './board.css';

const Board = () => {
    return (
        <div className='board-container'>
            <div className='left-column'>
                <Tasks />
            </div>
            <div className='right-column'>
                <ProgressBar />
            </div>
        </div>
    )
}

export default Board
