import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {
    const [completeTasks, setCompleteTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/completedTasks')
            .then(res => res.json())
            .then(data => setCompleteTasks(data))
    }, []);

    return (
        <div>
            <div className='text-center mx-2 md:mx-20 lg:mx-40'>
                <h1 className='text-2xl font-medium my-4'>Completed Task List</h1>
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Task</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                completeTasks.map((t) => <tr key={t._id}>
                                    <th>{t._id}</th>
                                    <td>{t.task}</td>
                                    <td>{t.state}</td>
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