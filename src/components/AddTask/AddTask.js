import React, { useState, useEffect } from 'react';
import './addTask.css';

const AddTask = ({ setAddNewTask, type, setTasks, editingTask }) => {

    const [text, setText] = useState("");

    useEffect(() => {
        if (editingTask) {
            setText(editingTask.text);
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingTask) {
            setTasks((prevTasks) =>
                prevTasks.map((t) =>
                    t.id === editingTask.id ? { ...t, text: text.trim() } : t
                )
            );
        } else {
            const newTask = {
                type,
                text: text.trim(),
                id: Math.floor(Math.random() * 1000000)
            };
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }

        setText("");
        setAddNewTask(false);
    }

    return (
        <div className='new-task-container'>
            <form onSubmit={handleSubmit}>
                <div className='body'>
                    <input
                        autoFocus
                        value={text || ""}
                        onChange={(e) => setText(e.target.value)}>
                    </input>
                </div>
                <div className='footer'>
                    <button id='add' type='submit'> {editingTask ? "Edit" : "Add"} </button>
                    <button id='cancel' onClick={() => setAddNewTask(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask
