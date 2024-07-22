import React,{useState,useEffect} from 'react'

const TaskForm = ({addTask,editTask,taskToEdit,clearEdit}) => {
    const [title, setTitle]=useState('');
    const [description, setDescription] = useState('');

    useEffect(()=> {
        if (taskToEdit){
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        } else {
            setTitle('');
            setDescription('');
        }
    },[taskToEdit]);

    const handleSubmit = (e) =>{
        console.log("added")
        e.preventDefault();
        if (taskToEdit){
            editTask(taskToEdit.id,title,description);
        } else {
            addTask(title,description);
        }
        setTitle('');
        setDescription('');
    };
  return (
    <div >
        <input 
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
         />

        <textarea 
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
        ></textarea>

        <button type='submit' onClick={handleSubmit}>{taskToEdit ?'update Task' : 'Add Task'}</button>
        {taskToEdit && <button type='button' onClick={clearEdit}>Cancel</button>}
      
    </div>
  )
}

export default TaskForm
