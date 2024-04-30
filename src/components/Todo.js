import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const [dueDate, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="Todo">
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className='todo-checkbox'
      />
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
        style={{ textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.5 : 1 }}
      >
        {task.task}
      </p>
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        placeholder="Select due date"
      />
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};