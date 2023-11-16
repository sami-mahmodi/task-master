// src/components/TodoForm.tsx
import React, { useState } from 'react';

type TodoFormProps = {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded outline-none text-black"
        placeholder="Add a new Task"
      />
      <button type="submit" className="bg-indigo-400 text-white p-2 hover:bg-indigo-500 rounded my-4 w-full">
        Add Task +
      </button>
    </form>
  );
};

export default TodoForm;
