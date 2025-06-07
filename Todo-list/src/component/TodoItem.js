import React from 'react'

export const TodoItem = ({ id, name, completed, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
                {name}
            </label>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}
