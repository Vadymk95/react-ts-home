import React from 'react';
import { IMethodsTodo, ITodo } from '../types';

interface ITodoItem extends ITodo {}

const TodoItem: React.FC<ITodoItem & IMethodsTodo> = ({
  id,
  title,
  complete,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <li
      style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        marginBottom: '10px',
      }}
    >
      <input type="checkbox" onChange={() => toggleTodo(id)} />
      <span style={complete ? { textDecoration: 'line-through' } : {}}>
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>delete</button>
    </li>
  );
};

export default TodoItem;
