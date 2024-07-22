import React, {useState,useEffect} from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks){
          setTasks(storedTasks)
      }         
    }, []);

    

    const addTask = (title, description) => {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed:false,
      };
      
      
      setTasks([...tasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
   

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };

    const completeTask = (id) => {
      setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed }: task));
    };

    const startEditTask = (id) => {
      setTaskToEdit(tasks.find(task => task.id === id));
  };

    const editTask = (id, title, description) => {
      setTasks(tasks.map(task => task.id === id ? {...task, title, description} : task));
      setTaskToEdit(null);
    };

    const clearEdit = () => {
      setTaskToEdit(null);
    };
    

  return (
    <div className='App'> 
      <Header/>
      <TaskForm 
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
          clearEdit={clearEdit} 
        />
      <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
          startEditTask={startEditTask}
        />

    </div>
  )
}

export default App
