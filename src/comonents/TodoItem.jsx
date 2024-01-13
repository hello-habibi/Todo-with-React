import React, { useState } from 'react'
import { useTodo } from '../context/todoContext';

function TodoItem({todo}) {
    const [isEditable , setIsEditable] = useState(false)

    const [todoMsg , setTodoMsg] = useState(todo.todoMsg)
    const todoID = todo.id;


    const {deleteTodo , editTodo , toggleComplete } = useTodo()

    const deleteItem = ()=>{
        console.log("deleted ");
        deleteTodo(todo.id);
    }
    const toggleEdit = ()=>{
        editTodo(todoID , {...todo , todoMsg: todoMsg});
        setIsEditable((prev) => !prev)
    }
    return (
        <div className={`flex mb-2 justify-center p-1 align-middle center ${todo.isFinished ? "line-through" : ""} ${todo.isFinished ? "bg-lime-500" : "bg-violet-500"} rounded-lg px-3`}>
            <div>
            <input type="checkbox" 
            className='size-4 mr-3 mt-2 '
            onClick={()=> toggleComplete(todo.id)}
            />
            </div>
            <input type="text" 
            className={ `text-xl text-black w-full bg-transparent ${isEditable? "border-2 rounded-md":""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly = {!isEditable || todo.isFinished}

            />
            <button className=' text-xl'
            onClick={toggleEdit}>
                {(isEditable || todo.isFinished)? "📁" : "✏️"}
            </button>
            <button 
            onClick={deleteItem}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem
