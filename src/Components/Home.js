import React, { useRef, useState } from 'react';
import ToDoHome from './ToDoHome';

const Home = () => {
    const taskRef = useRef('');
    const [idToEdit, setIdToEdit] = useState('');

    const handleTaskAdd = (e) => {
        const taskDetail = taskRef.current.value;
        if (idToEdit && taskDetail) {
            fetch(`https://simple-task-manager-seam.herokuapp.com/editedTasks/${idToEdit}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ task: taskDetail })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        taskRef.current.value = '';
                    }
                })
        };

        if (taskDetail) {
            fetch('https://simple-task-manager-seam.herokuapp.com/tasks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ task: taskDetail })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        taskRef.current.value = '';
                    }
                })
        }
    };

    const handleEnterKeypress = (e) => {
        if (e.key === 'Enter') {
            handleTaskAdd();
        }
    };

    const editTask = (taskToEdit) => {
        const { _id, task } = taskToEdit;
        taskRef.current.value = task;
        setIdToEdit(_id);
    }

    return (
        <div className='min-h-screen'>
            <div className="hero bg-base-100">
                <div className="hero-content text-center">
                    <div className="w-[300px] md:w-[500px] lg:w-[700px]">
                        <h1 className='text-2xl font-medium my-4'>Manage Your Task By Intelligence</h1>
                        <div className="form-control">
                            <div className="input-group mx-auto">
                                <input
                                    ref={taskRef}
                                    onKeyPress={handleEnterKeypress}
                                    type="text"
                                    placeholder="Task Description..."
                                    className="input input-bordered mx-auto w-full" />
                                <button
                                    onClick={handleTaskAdd}
                                    type="submit"
                                    className="btn px-1">
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToDoHome editTask={editTask}></ToDoHome>
        </div>
    );
};

export default Home;