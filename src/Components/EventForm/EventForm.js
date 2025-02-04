import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EventForm.css";

const categories = [
    { label: "Work", color: "#ffcccb" },
    { label: "Personal", color: "#add8e6" },
    { label: "Vacation", color: "#90ee90" },
];

function EventForm({ onAddEvent }) {
    const [newEvent, setNewEvent] = useState({
        title: "",
        start: new Date(),
        end: new Date(),
        category: categories[0].label,
    });

    const handleAddEvent = () => {
        if (!newEvent.title) {
            alert("Please add a title for the event.");
            return;
        }
        if (newEvent.start > newEvent.end) {
            alert("End date cannot be before the start date.");
            return;
        }
        onAddEvent({ ...newEvent, id: Date.now() });
        setNewEvent({ title: "", start: new Date(), end: new Date(), category: categories[0].label });
    };

    return (
        <div className="event-form">
            <h2 className="form-title">Add New Event</h2>
            <div className="form-content">
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Event Title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <DatePicker
                        className="form-input"
                        placeholderText="Start Date"
                        selected={newEvent.start}
                        onChange={(start) => setNewEvent({ ...newEvent, start })}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
                <div className="form-group">
                    <DatePicker
                        className="form-input"
                        placeholderText="End Date"
                        selected={newEvent.end}
                        onChange={(end) => setNewEvent({ ...newEvent, end })}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
                <div className="form-group">
                    <select
                        className="form-input"
                        value={newEvent.category}
                        onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                    >
                        {categories.map((cat) => (
                            <option key={cat.label} value={cat.label}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button className="submit-button" onClick={handleAddEvent}>ADD Event</button>
        </div>
    );
}

export default EventForm;