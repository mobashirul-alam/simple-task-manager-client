import React from 'react';
import useToDo from '../hooks/useToDo';

const ToDo = () => {
    const [tasks] = useToDo();
    return (
        <div>
            <h1>This is to do list</h1>
            <h1>To do list: {tasks.length}</h1>
        </div>
    );
};

export default ToDo;