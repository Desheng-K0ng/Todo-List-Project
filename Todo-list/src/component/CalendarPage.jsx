import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';

export default function CalendarPage() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="calendar-page">
            <h2>My Calendar</h2>
            <Calendar
                onChange={setDate}
                value={date}
            />
            <p>Selected date: {date.toDateString()}</p>
        </div>
    );
}
