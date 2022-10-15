import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask, showCompleted = false }) {

  const taskTableRows = (doneValue) => {
    return (
      tasks
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ))
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  )
}

export default TaskTable