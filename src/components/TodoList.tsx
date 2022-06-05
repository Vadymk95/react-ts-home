import React from 'react';
import { ITodo, IMethodsTodo } from '../types/index';
import TodoItem from './TodoItem';

interface ITodoList extends IMethodsTodo {
  items: ITodo[];
}

const TodoList: React.FC<ITodoList> = ({ items, removeTodo, toggleTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
