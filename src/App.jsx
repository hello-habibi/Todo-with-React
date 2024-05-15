import React, { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './comonents/TodoForm'
import { TodoProvider } from './context/todoContext'
import TodoItem from './comonents/TodoItem'

function App() {
  // all the state managements is here 
  let [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  // all the functon here 
  const addTodo = (todoMsg) => {
    const id = Date.now();
    setTodos((prev) => [{ id: id, todoMsg: todoMsg, isFinished: false }, ...prev])
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id))
  }
  const editTodo = (id, newMsg) => {
    setTodos((prevList) =>
      prevList.map((todo) => (todo.id === id ? newMsg : todo))
    );
    console.log("msg edited");
  };
  const toggleComplete = (id) => {
    console.log("toggle is working");
    setTodos((prevList) => prevList.map((todo) => todo.id == id ? { ...todo, isFinished: !todo.isFinished } : todo))
  }

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}>
      <h1 className='text-center text-4xl font-bold text-yellow-400 capitalize pt-4'>Start Adding Your Work of Your Day 📝<br /> <span className='text-yellow-900'>Never forget anything 😏</span></h1>
      <div id='todo-app' className='max-w-lg mx-auto pt-14'>
        <div id='todo-form'>
          <TodoForm />
        </div>
        <div id='todo-container' className='pt-4'>
          {
            todos.map((todo) => {
              // console.log(todo);
              return <TodoItem todo={todo} key={todo.id} />;
            })
          }
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
