import React, { useState } from 'react';
import useToDo from '../hooks/useToDo';
import { toast } from 'react-toastify';

const ToDoHome = ({ editTask }) => {
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
                    if (data.modifiedCount === 1) {
                        console.log(data)
                        toast('Congratulations! You have completed your task')
                    }
                    if (data.modifiedCount === 0) {
                        toast.error('Task already completed.')
                    }
                })
        }
    };

    return (
        <div className='mx-2 md:mx-20 lg:mx-40'>
            <h1 className=' text-center text-2xl font-medium mt-4 mb-6'>To Do List</h1>
            <div class="overflow-x-auto w-full">
                <table class="w-full table-zebra table-auto">
                    <thead className='bg-base-200'>
                        <tr>
                            <th className='py-3'></th>
                            <th className='py-3'>Task</th>
                            <th className='py-3'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(t => <tr key={t._id}>
                                <th className='py-2'>
                                    <label>
                                        <input
                                            onClick={() => setCompleted(t._id)}
                                            name="checkComplete"
                                            type="checkbox"
                                            class="checkbox" />
                                    </label>
                                </th>
                                <td className='py-2'>
                                    <div class="flex items-center space-x-3">
                                        <div>
                                            <div class="font-medium">
                                                {t.task}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th className='py-2'>
                                    <button
                                        onClick={() => editTask(t)}
                                        class="btn btn-xs">
                                        Edit
                                    </button>
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