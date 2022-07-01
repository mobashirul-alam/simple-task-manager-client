import { useEffect, useState } from 'react';

const useToDo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://simple-task-manager-seam.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return [tasks, setTasks];
};

export default useToDo;