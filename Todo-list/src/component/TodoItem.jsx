import React, { useEffect, useRef, useState } from "react";
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
          <form
            id="form edit"
            onSubmit={(e) => {
              e.preventDefault();
              saveTodo(id, editedName);
            }}
          >
            <input
              id="input-edit"
              ref={inputRef}
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </>
      ) : (
        <>
          <label className="list-item-label">
            <input
              type="checkbox"
              data-list-item-checkbox
              checked={completed}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{editedName}</span>
          </label>
          <button onClick={() => editTodo(id)}>Edit</button>
          <button
            data-button-delete
            onClick={() => {
              deleteTodo(id);
            }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};
