import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventCalendar.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const categoryColors = {
    Work: "rgb(55, 165, 244)",
    Personal: "#67f67f",
    Vacation: "#ccee60",
};

function EventCalendar({ events, onDeleteEvent }) {
    return (
        <div className="calendar-container">
            <h2 className="calendar-title">Event Schedule</h2>
            <div className="calendar-wrapper">
                <Calendar
                    className="custom-calendar"
                    localizer={localizer}
                    events={events.map((event) => ({
                        ...event,
                        start: new Date(event.start),
                        end: new Date(event.end),
                    }))}
                    startAccessor="start"
                    endAccessor="end"
                    eventPropGetter={(event) => ({
                        style: {
                            backgroundColor: categoryColors[event.category] || "lightblue",
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "#000",
                        },
                    })}
                    style={{ height: 500 }}
                    onSelectEvent={(event) => {
                        if (window.confirm("Are you sure you want to delete this event?")) {
                            onDeleteEvent(event.id);
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default EventCalendar;