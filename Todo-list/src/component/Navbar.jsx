import React from 'react';
import './Navbar.css';
import { Link, } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">MyPlanner</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}