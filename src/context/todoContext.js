import { createContext , useContext } from "react";

export  const TodoContext = createContext({
    todos: [
        {
        todoMsg: "",
        isFinished : false,
        todoId:""
        }
],
    addTodo:(todoMsg)=>{},
    deleteTodo:(id) => {},
    editTodo: (id,todoMsg) =>{},
    toggleComplete : (id) =>{}
});

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider


