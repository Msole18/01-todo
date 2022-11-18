import React from "react";


const TodoElement = ({item, onEdit, onDeleteTodo}) => {
    const handleEditClick = (e) => {
      e.preventDefault();
      onEdit(true);
    }

    const handleDelete = (id) => {
      onUpdateTodo(item.id, newValue)
      onEdit(false);
    }

    return (
      <div className='todoInfo'>
        {item.title} <button onClick={handleEditClick} >Edit</button>
        <button className="button" onDeleteTodo={handleDelete}>Delete</button>
      </div>
    );
}

export default TodoElement;