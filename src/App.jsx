import './App.css'
import AddItem from './components/AddItem';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {


  return (
    <Provider store = {store}>
      <div className='app'>
        <h1>Task Management App</h1>
        <TaskList />
        <AddItem />
      </div>
    </Provider>
  );
};

export default App
