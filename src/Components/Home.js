import React, { useRef } from 'react';
import ToDoHome from './ToDoHome';

const Home = () => {
    const taskRef = useRef('');

    const handleTaskAdd = (e) => {
        const taskDetail = taskRef.current.value;
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
    };

    const handleEnterKeypress = (e) => {
        if (e.key === 'Enter') {
            handleTaskAdd();
        }
    };

    return (
        <div>
            <div class="hero bg-base-100">
                <div class="hero-content text-center">
                    <div class="w-[700px]">
                        <h1 className='text-2xl font-medium my-4'>Simple Task Manager</h1>
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
                                    className="btn btn-square">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToDoHome></ToDoHome>
        </div>
    );
};

export default Home;