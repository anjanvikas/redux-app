import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';


const TaskList = () =>{

    const tasks = useSelector((state) => state.tasks.tasks);

    return (
        <div className='task-list'>
          { tasks.map((task) => 
                                <TaskItem key={task.id} task={task}/>)}
        </div>
    );
};

export default TaskList;