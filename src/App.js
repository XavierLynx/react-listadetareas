import { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';
const KEY = 'todolist.fatz';

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
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

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done));
  }

  return (
    <main className="bg-dark vh-100 text-white">
      <Container >
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={true}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
