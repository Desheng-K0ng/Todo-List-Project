import React, { useState } from 'react';
import "./Card.css"
const Card =
    ({
        newTodoName,
        description,
        setNewTodoName,
        setDescription,
        addNewTodo,

    }) => {

        return (
            <div className="addCard">

                <form onSubmit={addNewTodo} >

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
                        <br />
                        <button onClick={addNewTodo} >Add New Todo</button>
                    </div>
                </form>
            </div>
        );
    }

export default Card;