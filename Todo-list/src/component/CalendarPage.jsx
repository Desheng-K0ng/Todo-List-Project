import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());

  // ✅ 示例 Todo 数据（真实项目可从 props/context/backend 获取）
  const todos = [
    { id: 1, title: "Learn React", dueDate: "2025-07-20", completed: false },
    { id: 2, title: "Buy groceries", dueDate: "2025-07-19", completed: true },
    { id: 3, title: "Gym workout", dueDate: "2025-07-19", completed: false },
  ];

  // ✅ 过滤选中日期的 todo
  const selectedDateString = date.toLocaleDateString("en-CA"); // "2025-07-19"
  const todosForDate = todos.filter(
    (todo) => todo.dueDate === selectedDateString
  );

  return (
    <div className="calendar-page">
      <h2>My Calendar</h2>
      <Calendar onChange={setDate} value={date} />

      <div className="todo-list">
        <h3>Todos for {date.toDateString()}:</h3>
        {todosForDate.length === 0 ? (
          <p>No tasks for this date.</p>
        ) : (
          <ul>
            {todosForDate.map((todo) => (
              <li key={todo.id}>
                <span>{todo.title}</span>
                {todo.completed && <span style={{ color: "green" }}> ✅</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
