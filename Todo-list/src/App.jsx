import React from "react";
import { useState } from "react";
import SaveInput from "./component/saveInput";
const App = () => {
  const [newTodoName, setNewTodoName] = useState("") // input
  const [todos, setTodos] = useState([]) // task list

  function addNewTodo() {
    if (newTodoName === "") return // prevent from enter nothing
    setTodos([...todos,
    {
      id: crypto.randomUUID(),// have its own id
      name: newTodoName,
      completed: false
    }]) // add new todos
    setNewTodoName("") // clear the input block
  }

  function toggleTodo(id, completed) {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed } : todo))
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <>
      <div>
        <input type="text" value={newTodoName} onChange={(e) => setNewTodoName(e.target.value)} />
        <p>The input is now {newTodoName}</p>
      </div>
      <button onClick={addNewTodo}>add to do</button>
      <ul>
        {todos.map((todo, index) => (<li key={todo.id}><label><input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)} /> {todo.name}</label> <button onClick={() => deleteTodo(todo.id)}>Delete</button></li>))}
      </ul>
    </>
  );
};

export default App;
