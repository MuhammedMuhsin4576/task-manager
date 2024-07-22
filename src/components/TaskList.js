import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, deleteTask, completeTask, startEditTask}) => {
  return (
    <div className="task-list">
        {tasks.map((task) => (
            <TaskItem 
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
                startEditTask={startEditTask}
            />
        ))}
      
    </div>
  )
}

export default TaskList
