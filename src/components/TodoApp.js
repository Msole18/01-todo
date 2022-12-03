import React, { useState } from 'react'; 
import Todo from './Todo';
import './TodoApp.css';

const TodoApp = () => {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmitCLick = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        setTodos([...todos, newTodo]);
    }

    const handlerTextChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    } 

    const handleUpdate = (id, value) => {
        const temp = [...todos];
        const item = temp.find( item => item.id === id)
        item.title = value;
        setTodos(temp)
    }

    const handleDelete = (id) => {
        const temp = todos.filter( item => item.id !== id);
        setTodos(temp);
    }

  return (
    <div className='todoContainer'> {/* esto podria ser un <Card>  */}
        {/* Todoform Component, si es posible dentro de components card */}
        <form className='todoCreateForm'>
            <input
                onChange={handlerTextChange} 
                className='todoInput'
                value={title}
            />
            <input 
                onClick={handleSubmitCLick}
                type='submit'
                value='Create todo'
                className='buttonCreate'
            />
        </form>
        {/* Todolist Component, si es posible dentro de components card */}
        <div className='todosContainer'>
                {todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
        </div> 
    </div>
  )
}

export default TodoApp;