import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo Msg',
            completed: false
        }
    ],
    addTodo: (id) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider