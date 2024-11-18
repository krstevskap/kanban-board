import React, {useState} from 'react';
import './addTask.css';

const AddTask = ({ setAddNewTask, type, setTasks }) => {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!text.trim().length) 
            return;

        const newTask = {
            type,
            text: text.trim(),
            id:  Math.floor(Math.random() * 1000000)
        };

        setTasks((t)=>[...t, newTask]);

        setText("");
    }

    return (
        <div className='new-task-container'>
            <form onSubmit={handleSubmit}>
                <div className='body'>
                    <input 
                    autoFocus 
                    value={text || ""}
                    onChange={(e)=>setText(e.target.value)}>
                    </input>
                </div>
                <div className='footer'>
                    <button id='add' type='submit'>Add</button>
                    <button id='cancel' onClick={() => setAddNewTask(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask
