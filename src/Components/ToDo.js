import React from 'react';
import useToDo from '../hooks/useToDo';

const ToDo = () => {
    const [tasks] = useToDo();
    return (
        <div className='mx-2 md:mx-20 lg:mx-40 min-h-screen'>
            <h1 className='text-center text-2xl font-medium my-4'>To Do List</h1>
            <div className="overflow-x-auto">
                <table className="table-auto table-zebra w-full">
                    <thead className='bg-base-200'>
                        <tr>
                            <th className='py-3'>ID</th>
                            <th className='py-3'>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((t) => <tr key={t._id}>
                                <th className='py-2'>{t._id}</th>
                                <td className='py-2'>{t.task}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDo;