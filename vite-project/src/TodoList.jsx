import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deteleTodo }) {
    return (<ul className='list'>
        {todos.length === 0 && 'No Todos'}
        {todos.map(todo => {
            return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deteleTodo={deteleTodo} />
        })}

    </ul>)
}