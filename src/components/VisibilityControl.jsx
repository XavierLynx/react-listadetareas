
function VisibilityControl({ isChecked, setShowCompleted, cleanTasks }) {
  
const handleDelete = () => {
  if (window.confirm('Are you sure you want to delete it?')) {
    cleanTasks();
    setShowCompleted(false);
  }
}

  
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Show Tasks Done</label>
      {" "}
      <button onClick={handleDelete}>Clear</button>
    </div>
  )
}

export default VisibilityControl