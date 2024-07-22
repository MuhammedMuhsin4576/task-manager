import React from 'react'

const TaskItem = ({task, deleteTask, completeTask, startEditTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description} </p>
      <button onClick={() =>completeTask(task.id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => startEditTask(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem
