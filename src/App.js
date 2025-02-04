import React, { useState, useEffect } from "react";
import EventForm from "./Components/EventForm/EventForm";
import EventCalendar from "./Components/EventCalendar/EventCalendar";
import "./App.css";

function App() {
    const [allEvents, setAllEvents] = useState(() => {
        const savedEvents = localStorage.getItem("events");
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(allEvents));
    }, [allEvents]);

    function handleAddEvent(newEvent) {
        const newStart = new Date(newEvent.start);
        const newEnd = new Date(newEvent.end);

        const hasClash = allEvents.some(existing => {
            const existingStart = new Date(existing.start);
            const existingEnd = new Date(existing.end);
            return (
                (newStart >= existingStart && newStart < existingEnd) ||
                (newEnd > existingStart && newEnd <= existingEnd) ||
                (newStart <= existingStart && newEnd >= existingEnd)
            );
        });

        if (hasClash) {
            alert("Event time clashes with an existing event!");
            return;
        }

        setAllEvents([...allEvents, { ...newEvent, id: Date.now() }]);
    }

    const handleDeleteEvent = (eventId) => {
        setAllEvents(allEvents.filter(event => event.id !== eventId));
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Mobiscroll Calendar</h1>
            <EventForm onAddEvent={handleAddEvent} />
            <EventCalendar events={allEvents} onDeleteEvent={handleDeleteEvent} />
        </div>
    );
}

export default App;