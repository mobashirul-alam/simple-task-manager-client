import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {
    const [completeTasks, setCompleteTasks] = useState([]);

    useEffect(() => {
        fetch('https://simple-task-manager-seam.herokuapp.com/completedTasks')
            .then(res => res.json())
            .then(data => setCompleteTasks(data))
    }, []);

    return (
        <div className='min-h-screen'>
            <div className='mx-2 md:mx-20 lg:mx-40'>
                <h1 className='text-center text-2xl font-medium my-4'>Completed Task List</h1>
                <div className="overflow-x-auto">
                    <table className="table-zebra table-auto w-full">
                        <thead className='bg-base-200'>
                            <tr>
                                <th className='py-3'>ID</th>
                                <th className='py-3'>Task</th>
                                <th className='py-3'>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                completeTasks.map((t) => <tr key={t._id}>
                                    <th className='font-semibold py-2'>{t._id}</th>
                                    <td className='py-2'>{t.task}</td>
                                    <td className='py-2'>{t.state}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;