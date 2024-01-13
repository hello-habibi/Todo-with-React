import React, { useState } from 'react'
import { useTodo } from '../context/todoContext'

function TodoForm() {
    const [todoMsg, setTodoMsg] = useState("")

    const todoList = useTodo()

    const addTodo = (e) => {
        e.preventDefault()
        console.log(todoMsg);
        todoList.addTodo(todoMsg);
        setTodoMsg("")

    }
    return (
        <form className='flex' onSubmit={addTodo}>

            <input type="text"
                placeholder='Put Your Work Here : '
                value={todoMsg}
                className='w-full h-6 text-xl p-5 rounded-lg'
                onChange={(e) => setTodoMsg(e.target.value)} />
            <button type='submit' className=' bg-slate-900 text-gray-300 font-bold rounded-lg px-2'
                >
                Add
            </button>

        </form>
    )
}

export default TodoForm
