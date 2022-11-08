import React, {useState} from 'react';

function Todo({item}) {
    const [isEdit, setIsEdit] = useState(false);

    const handlerEditClick = () => {
        setIsEdit(true);
    }
  return (
    <div className='todo'>
      {item.title} <button onClick={handlerEditClick}>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default Todo;