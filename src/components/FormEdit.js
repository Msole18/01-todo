import React, {useState} from "react";

const FormEdit = ({item, onUpdateTodo, onEdit}) => {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    }

    const handleChange = (e) => {
      const value = e.target.value
      setNewValue(value)
    }

    const handleClickUpdate = () => {
      onUpdateTodo(item.id, newValue)
      onEdit(false);
    }

    return (
      <form className='todoUpdeteForm' onSubmit={handleSubmit}>
        <input 
          type='text' 
          className='todoInput'
          value={newValue} 
          onChange={handleChange}/>
        <button className="button" onClick={handleClickUpdate} >Update</button>
      </form>
    );
}

export default FormEdit;