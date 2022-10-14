import { useState } from 'react';
import React from 'react'

export default function TaskCreator() {
	const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('task', task);
    setTask('');
  }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter a new task"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>

				<button>Save Task</button>
			</form>
		</div>
	)
}
