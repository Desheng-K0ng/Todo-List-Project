import React, { useEffect, useState } from "react";
import { useFocus } from "./useFocus";

export const TodoItem = ({
  id,
  name,
  completed,
  toggleTodo,
  deleteTodo,
  isEditing,
  editTodo,
  saveTodo,
}) => {
  const [editedName, setEditedName] = useState(name); // set a state using name as initial value

  const [inputRef, setFocus] = useFocus();

  useEffect(() => {
    isEditing && setFocus();
  }, [isEditing]);
  return (
    <li className="list-item">
      {isEditing ? (
        <>
          <div className="card">
            <div className="card-content">
              <form
                id="form edit"
                onSubmit={(e) => {
                  e.preventDefault();
                  saveTodo(id, editedName);
                }}
              >
                <span>Title: </span>
                <input
                  id="input-edit"
                  ref={inputRef}
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button type="submit">Save</button>
              </form>
              <p className="card-text">This is a simple card description.</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">This is a simple card description.</p>
              <input
                type="checkbox"
                data-list-item-checkbox
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
              />
              <button onClick={() => editTodo(id)}>Edit</button>
              <button
                data-button-delete
                onClick={() => {
                  deleteTodo(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
};
