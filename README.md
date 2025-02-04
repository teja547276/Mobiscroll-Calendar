
# React Calendar Application

This is a React-based calendar application built using Mobiscroll Calendar and React Big Calendar. Users can create, view, and manage events with different categories and colors. The app allows seamless navigation between various calendar views and ensures persistent event storage using local storage.

## Features
- **Event Creation & Editing**: Add events with start time, end time, title, and category.
- **Category-Based Colors**: Events are color-coded based on category (Work, Personal, Vacation).
- **Local Storage Support**: Events persist across sessions.
- **Event Conflict Prevention**: Alerts users if an event time overlaps with another.
- **Interactive UI**: Smooth interactions with a professional design.
- **Event Deletion**: Easily remove events by clicking on them.

## Prerequisites
Ensure you have the following installed before running the application:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/teja547276/Mobiscroll-Calendar.git
   cd my-app
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application
To start the application locally, use:
```bash
npm start
```
This will start the application, typically available at `http://localhost:3000/`.

## Project Structure
```
my-app/
├── src/
│   ├── Components/
│   │   ├── EventForm/         # Component for adding events
│   │   ├── EventCalendar/     # Component for displaying calendar
│   ├── App.js                # Main application file
│   ├── App.css               # Application styles
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Technologies Used
- **React.js**
- **Mobiscroll Calendar**
- **React Big Calendar**
- **Date-fns** for date formatting
- **React-Select** for category selection
- **Local Storage** for persistent data

## Customization
You can modify categories, event colors, and UI styling in `src/Components/EventForm.js` and `src/App.css`.

## Contributing
Feel free to contribute by submitting issues or pull requests.

## License
This project is licensed under the MIT License.

---
**Author:** Teja  
**GitHub:** [Teja's GitHub](https://github.com/teja547276)
