import React, { useState } from 'react'; 
import Todo from './Todo';

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

  return (
    <div className='todoContainer'>
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
            <div className='todosContiner'>
                {todos.map(item => (
                    <Todo key={item.id} item={item}/>
                ))}
            </div>
    </div>
  )
}

export default TodoApp;