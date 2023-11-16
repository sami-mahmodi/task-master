// pages/index.tsx
'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

type Todo ={
  id: number;
  text: string;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className='max-w-full'>

      <Head>
        <title>Task Master</title>
        <meta name="description" content="Simple todo app with Next.js, Tailwind CSS, and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="  bg-teal-100 min-h-screen flex justify-center">
    <div className='w-1/2  p-24'>

      <h1 className="text-3xl font-bold mb-12 text-center text-teal-900">Pro Task</h1>

      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
    </div>
    </main>
  );
};

export default Home;
