import React from 'react';
import useToDo from '../hooks/useToDo';

const ToDoHome = () => {
    const [tasks] = useToDo();
    return (
        <div className='mx-2 md:mx-20 lg:mx-40'>
            <h1 className=' text-center text-2xl font-medium mt-4 mb-6'>To Do List</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Task</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(t => <tr key={t._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div>
                                            <div class="font-medium">{t.task}</div>
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