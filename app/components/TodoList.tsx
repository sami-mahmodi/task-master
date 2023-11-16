// src/components/TodoList.tsx
import { type } from 'os';
import React from 'react';

type Todo = {
  id: number;
  text: string;
}

type TodoListProps  ={
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
<ul className="w-full">
  {todos.length < 1 ? (
    <h1 className='text-xl mt-8 text-center text-white bg-indigo-400 p-4 rounded-md '>You've completed all your tasks! No tasks left.</h1>

  ) : (
    todos.map((todo) => (
      <li key={todo.id} className="flex justify-between items-center bg-indigo-600 p-2 rounded mb-2 bg-cyan-200 text-white ">
        <p className='text-xl'>{todo.text}</p> 
        <button className="text-white bg-red-400 hover:bg-red-600 p-2 rounded-md" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </li>
    ))
  )}
</ul>

  );
};

export default TodoList;
