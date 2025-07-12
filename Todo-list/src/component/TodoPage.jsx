import React, { useRef, useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { useToggle } from "./useToggle";
import Card from "./Card";

export default function TodoPage() {
    const [newTodoName, setNewTodoName] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const [toastMessage, setToastMessage] = useState("");
    const [isDarkMode, toggleDarkMode] = useToggle(false);
    const todoCountRef = useRef(0);

    function addNewTodo(e) {
        e.preventDefault();
        if (newTodoName.trim() === "" || description.trim() === "") {
            setToastMessage("Title and Description cannot be empty!");
            setTimeout(() => setToastMessage(""), 2000);
            return;
        }
        setTodos([
            ...todos,
            {
                id: crypto.randomUUID(),
                name: newTodoName,
                description: description,
                completed: false,
                isEditing: false,
            },
        ]);
        setNewTodoName("");
        setDescription("");
    }

    function editTodo(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: true } : todo
            )
        );
    }

    function saveTodo(id, newName, newDescription) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    const finalName = newName.trim() ? newName : todo.name;
                    const editDescription = newDescription.trim() ? newDescription : todo.description;
                    return { ...todo, name: finalName, description: editDescription, isEditing: false };
                }
                return todo;
            })
        );
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    useEffect(() => {
        todoCountRef.current = todos.length;
    }, [todos]);

    return (
        <div
            style={{
                background: isDarkMode ? "#333" : "white",
                color: isDarkMode ? "white" : "#333",
                minHeight: "100vh",
                padding: "20px"
            }}
        >
            {toastMessage && <div className="toast">{toastMessage}</div>}
            <button onClick={toggleDarkMode}>
                Change Mode: {isDarkMode ? "Dark" : "Light"}
            </button>
            <h1>Todo - List</h1>
            <p>The length of the todos is now {todos.length}</p>
            <Card
                newTodoName={newTodoName}
                description={description}
                setNewTodoName={setNewTodoName}
                setDescription={setDescription}
                addNewTodo={addNewTodo}
            />
            <ul id="list">
                <div className="card-container">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            saveTodo={saveTodo}
                        />
                    ))}
                </div>
            </ul>
        </div>
    );
}
