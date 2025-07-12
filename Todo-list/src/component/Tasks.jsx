import React from 'react';
import './Tasks.css';

export default function Tasks() {
    // show all the todos 
    const todos = [
        { id: 1, title: 'Buy groceries', description: 'Milk, Bread, Eggs' },
        { id: 2, title: 'Finish project', description: 'Complete by Friday' },
        { id: 3, title: 'Workout', description: '30 min run + stretching' },
    ];

    return (
        <div className="tasks-container">
            <h2>My To-Do List</h2>
            <div className="tasks-list">
                {todos.map((todo) => (
                    <div key={todo.id} className="task-card">
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
