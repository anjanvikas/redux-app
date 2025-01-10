import {createSlice} from '@reduxjs/toolkit';

//initial state
const initialState = {
    tasks : []
}

// create a slice for tasks
// add a task
// mark as completed or not done
// delete a task
const taskSlice = createSlice(
    {
        name : 'tasks',
        initialState,
        reducers : {
            addTask : (state,action) => {
                state.tasks.push({ id: Date.now(), text: action.payload, completed: false});
            },
            toogleTask : (state,action) => {
                const task = state.tasks.find((task) => task.id === action.payload)
                if(task){
                    task.completed = !task.completed;
                }
            },
            deleteTask : (state,action) => {
                state.tasks = state.tasks.filter((task) => task.id !== action.payload)
            }
        }
    }
    );
 
export const {addTask, toogleTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;
