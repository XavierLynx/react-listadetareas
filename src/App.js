import { useState } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator';


function App() {
  const [tasksItems, setTasksItems] = useState([
    {name: 'mi primer tarea', done: false},
    {name: 'mi segunda tarea', done: false},
    {name: 'mi tercer tarea', done: false}
  ]);

  const createNewTask = (taskName) => {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, {name: taskName, done: false}]);
    }
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksItems.map(task => (
              <tr key={task.name}>
                <td>{task.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
