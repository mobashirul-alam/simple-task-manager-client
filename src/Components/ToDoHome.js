import React, { useState } from 'react';
import useToDo from '../hooks/useToDo';
import { toast } from 'react-toastify';

const ToDoHome = () => {
    const [tasks] = useToDo();
    const [checked, setChecked] = useState(false);

    const setCompleted = (_id) => {

        if (_id) {
            setChecked(!checked);
            fetch(`http://localhost:5000/tasks/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    state: "completed"
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast('Congratulations! You have completed your task')
                    }
                })
        }
    };

    return (
        <div className='mx-2 md:mx-20 lg:mx-40'>
            <h1 className=' text-center text-2xl font-medium mt-4 mb-6'>To Do List</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(t => <tr key={t._id}>
                                <th>
                                    <label>
                                        <input
                                            onClick={() => setCompleted(t._id)}
                                            name="checkComplete"
                                            type="checkbox"
                                            class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div>
                                            <div class="font-medium">
                                                {t.task}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">Edit</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDoHome;