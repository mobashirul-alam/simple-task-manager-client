import React from 'react';
import useToDo from '../hooks/useToDo';

const ToDo = () => {
    const [tasks] = useToDo();
    return (
        <div className='text-center mx-2 md:mx-20 lg:mx-40'>
            <h1 className='text-2xl font-medium my-4'>To Do List</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((t, index) => <tr key={t._id}>
                                <th>{index + 1}</th>
                                <td>{t.task}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDo;