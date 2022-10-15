import { useState, useEffect } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
const KEY = 'todolist.fatz';

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  const createNewTask = (taskName) => {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, {name: taskName, done: false}]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem(KEY);
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasksItems));
  }, [tasksItems]);

  const toggleTask = (taskName) => {
    const newTasksItems = [...tasksItems];
    const task = newTasksItems.find(item => item.name === taskName);
    task.done = !task.done;
    setTasksItems(newTasksItems);
  }
  
  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

    </div>
  );
}

export default App;
