import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import ImageCarousel from "./component/ImageCarousel.jsx";
import TodoPage from "./component/TodoPage.jsx";
import CalendarPage from "./component/CalendarPage.jsx";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h1>Welcome to MyPlanner</h1>
              <ImageCarousel />
            </div>
          }
        />
        <Route path="/tasks" element={<TodoPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}
