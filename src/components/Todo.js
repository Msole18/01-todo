import React, {useState} from 'react';
import FormEdit from './FormEdit';
import TodoElement from './TodoElement';
import './Todo.css'

function Todo({item, onUpdate, onDelete}) {
    const [isEdit, setIsEdit] = useState(false);

    const handlesSetEdit = (value) => {
      setIsEdit(value)
    }

  return (
    <diV className='todo'>
      {isEdit ? (<FormEdit 
                    item={item} 
                    onEdit={handlesSetEdit} 
                    onUpdateTodo={onUpdate} 
                />) 
                : 
                (<TodoElement 
                  item={item} 
                  onEdit={handlesSetEdit}
                  onDeleteTodo={onDelete} 
                />)
      }
    </diV>
    
  )
} 

export default Todo;

/*const FormEdit = () => {
      const [newValue, setNewValue] = useState(item.title);

      const handleSubmit = (e) => {
        e.preventDefault();
      }

      const handleChange = (e) => {
        const value = e.target.value
        setNewValue(value)
      }

      const handleClickUpdate = () => {
        onUpdate(item.id, newValue)
        setIsEdit(false);
      }

      return (
        <form className='todoUpdeteForm' onSubmit={handleSubmit}>
          <input 
            type='text' 
            className='todoInput'
            value={newValue} 
            onChange={handleChange}/>
          <button className="button" onClick={handleClickUpdate}>Update</button>
        </form>
      );
    }*/
    
    

    /*const TodoElement = () => {
      const handleEditClick = (e) => {
        e.preventDefault();
        setIsEdit(true);
      }
      return (
        <div className='todoInfo'>
          {item.title} <button onClick={handleEditClick}>Edit</button>
          <button >Delete</button>
        </div>
      );
    }
    */