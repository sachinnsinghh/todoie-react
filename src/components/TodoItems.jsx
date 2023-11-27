import React from 'react';

const TodoItems = (props) => {
  return (
    <li className='todo-item'>
      <span>
        {props.completed ? <></> : <input type="checkbox" /> }
        <span className='todo-item-text'>{props.text}</span>
      </span>
      <p>...</p>
    </li>
  )
}

export default TodoItems
