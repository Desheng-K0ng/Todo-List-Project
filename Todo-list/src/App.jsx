import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { TodoItem } from "./component/TodoItem";
import "./style.css";

const App = () => {
  const [newTodoName, setNewTodoName] = useState(""); // input
  const [todos, setTodos] = useState([]); // task list
  const todoCountRef = useRef(0); // use ref for count the number of todos 

  function addNewTodo() {
    if (newTodoName === "") return; // prevent from enter nothing

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(), // have its own id
        name: newTodoName,
        completed: false,
      },
    ]); // add new todos
    setNewTodoName(""); // clear the input block
  }

  function toggleTodo(id, completed) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    // map all the todos find the clicked one and and set it to complete or not
    // if is not the one dont do anything
  }

  useEffect(() => {
    todoCountRef.current = todos.length;
    console.log("The number of todos is now ", todoCountRef.current);
  }, [todos])
  // do something while todos array changes/updates

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    // filter all the todos but not the same id one
  }

  return (
    <>
      <p>The length of the todos is now {todos.length}</p>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          placeholder="Enter new todo"
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
      <ul id="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>

    </>
  );
};

export default App;
