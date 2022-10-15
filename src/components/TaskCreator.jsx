import { useState } from 'react';

function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    //localStorage.setItem('task', newTaskName);
    setNewTaskName('');
    //alert('Enviado...');
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Save Task</button>
      </div>
    </form>
  )
}

export default TaskCreator