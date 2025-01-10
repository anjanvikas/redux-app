import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTask} from '../redux/TaskSlice';

const AddItem = () =>{

    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleAddItem = () =>{
        if(taskText.trim()){
            dispatch(addTask(taskText));
            setTaskText('');
        }
        
    }

    return (
        <div className='add-task'>
            <input 
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder='Add a new task'
            />
            <button onClick={handleAddItem}>Add Task</button>
        </div>
    );
};

export default AddItem;