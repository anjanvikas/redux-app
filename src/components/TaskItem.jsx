import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleTask, deleteTask} from '../redux/TaskSlice';


const TaskItem = ({ task }) => {
    // task name, toogle, delete option
    const dispatch = useDispatch();

    const handleToogle = () =>{
        //need to dispatch toogle action
        dispatch(toogleTask(task.id));
    }

    const handleDelete = () =>{
        dispatch(deleteTask(task.id));
    }

    return (
        <div className='task-item'>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={handleToogle} 
            className="task-checkbox"
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="task-text">
            {task.text}
          </span>
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
      );
}

export default TaskItem;