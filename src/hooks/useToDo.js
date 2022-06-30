import { useEffect, useState } from 'react';

const useToDo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return [tasks, setTasks];
};

export default useToDo;