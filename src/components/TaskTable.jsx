import TaskRow from "./TaskRow"

function TaskTable({ tasks, toggleTask }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.map(task => (
            <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
          ))
        }
      </tbody>
    </table>
  )
}

export default TaskTable