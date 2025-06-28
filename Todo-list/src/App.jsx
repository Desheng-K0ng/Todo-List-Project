import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { TodoItem } from "./component/TodoItem";
import { useToggle } from "./component/useToggle";
import "./style.css";
import Card from "./component/Card";


const App = () => {
  const [newTodoName, setNewTodoName] = useState(""); // input
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const [todos, setTodos] = useState([]); // task list
  const [description, setDescription] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const todoCountRef = useRef(0); // use ref for count the number of todos

  function addNewTodo(e) {
    e.preventDefault();


    if (newTodoName.trim() === "" || description.trim() === "") {
      setToastMessage("Title and Description cannot be empty!");

      // 2秒后自动清除消息
      setTimeout(() => {
        setToastMessage("");
      }, 2000);

      return;
    }

    // prevent from enter nothing

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(), // have its own id
        name: newTodoName,
        description: description,
        completed: false,
        isEditing: false, // initial state
      },
    ]); // add new todos

    // clear everything filled in the put block
    setNewTodoName("");

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

  useEffect(() => {
    todoCountRef.current = todos.length;
    //console.log("The number of todos is now ", todoCountRef.current);
  }, [todos]);
  // do something while todos array changes/updates

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    // filter all the todos but not the same id one
  }

  useEffect(() => {
    //console.log("Mode is now Dark? ", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {toastMessage && (
        <div className="toast">{toastMessage}</div>
      )}
      <div
        style={{
          background: isDarkMode ? "#333" : "white",
          color: isDarkMode ? "white" : "#333",
        }}
      >
        <button onClick={toggleDarkMode}>
          Change Mode is now : {isDarkMode ? "Dark" : "White"}
        </button>
        <p>The length of the todos is now {todos.length}</p>

        <Card
          newTodoName={newTodoName}
          description={description}
          setNewTodoName={setNewTodoName}
          setDescription={setDescription}
          addNewTodo={addNewTodo}
        />

        <ul id="list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              saveTodo={saveTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
