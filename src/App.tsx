import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { ITodo } from './types/ITodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const AddTodo = () => {
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: inputValue,
          complete: false,
        },
      ]);
      setInputValue('');
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [todos.length]);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') AddTodo();
  };

  return (
    <div className="App">
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleOnKeyDown}
          ref={inputRef}
        />
        <button onClick={AddTodo}>Add Todo</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
