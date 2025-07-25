import React, { useState } from "react";
import "./Card.css";
const Card = ({
  newTodoName,
  description,
  setNewTodoName,
  setDescription,
  dueDate,
  setDueDate,
  addNewTodo,
  showModal,
}) => {
  return (
    <>
      {showModal && (
        <div className="addCard">
          <form onSubmit={addNewTodo}>
            <div className="card-content">
              <h3 className="card-title">Todo Title</h3>
              <input
                type="text"
                placeholder="Title"
                value={newTodoName}
                onChange={(e) => setNewTodoName(e.target.value)}
              />
              <h3 className="card-title">Todo Details</h3>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <h3 className="card-title">Todo Due Date</h3>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <button onClick={addNewTodo}>Add New Todo</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default Card;
