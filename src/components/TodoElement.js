import React from "react";
import './TodoElement.css';

const TodoElement = ({item, onEdit, onDeleteTodo}) => {
    const handleEditClick = (e) => {
      e.preventDefault();
      onEdit(true);
    }

    return (
      <div className='todoInfo'>
        <span className="todoTitle">{item.title}</span>
        <button className="button" onClick={handleEditClick} >Edit</button>
        <button className="buttonDelete" onClick={(e) =>onDeleteTodo(item.id)}>Delete</button>
      </div>
    );
}

export default TodoElement;