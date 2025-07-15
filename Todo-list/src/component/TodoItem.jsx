import React, { useEffect, useState } from "react";
import { useFocus } from "./useFocus";

export const TodoItem = ({
  id,
  name,
  description,
  dueDate,
  deleteTodo,
  isEditing,
  editTodo,
  saveTodo,
}) => {
  const [editedName, setEditedName] = useState(name); // set a state using name as initial value
  const [editDescription, setEditDescription] = useState(description);
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
                  saveTodo(id, editedName, editDescription);
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
              <span>Description: </span>
              <textarea
                ref={inputRef}
                placeholder="Description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              {dueDate && <p>Due: {dueDate}</p>}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Title: {name}</h3>
              <h3 className="card-text">Description: {description}</h3>
              <button onClick={() => editTodo(id)}>Edit</button>
              <button
                data-button-delete
                onClick={() => {
                  deleteTodo(id);
                }}
              >
                Delete
              </button>
              {dueDate && <p>Due: {dueDate}</p>}
            </div>
          </div>
        </>
      )}
    </li>
  );
};
