import { useState } from "react";
export function TodoItem({completed, id, title, toggleTodo, deteleTodo}) {
    return (<li>
        <label>
            <input type='checkbox' checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} 
            />
            {title}
        </label>
        <button className='btn btn-danger'
        onClick={e => deteleTodo(id)}
        >Delete</button>
    </li>)
}