import React, { useRef, useState } from 'react';
import ToDoHome from './ToDoHome';

const Home = () => {
    const taskRef = useRef('');
    const [idToEdit, setIdToEdit] = useState('');
    const [taskToEdit, setTaskToEdit] = useState('');
    console.log(idToEdit, 'id then text', taskToEdit);
    // taskRef.current.value = taskToEdit;

    const handleTaskAdd = (e) => {
        const taskDetail = taskRef.current.value;
        if (idToEdit) {
            fetch(`http://localhost:5000/editedTasks/${idToEdit}`, {
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
        }
        else {
            fetch('http://localhost:5000/tasks', {
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
        console.log('clicked at outside', task);
        taskRef.current.value = task;
        setTaskToEdit(task);
        setIdToEdit(_id);
    }

    return (
        <div className='min-h-screen'>
            <div class="hero bg-base-100">
                <div class="hero-content text-center">
                    <div class="w-[300px] md:w-[500px] lg:w-[700px]">
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